#!/bin/bash
# Polls GitHub OAuth token endpoint for the device-flow token.
# On success: saves token to local-github-token (0600, git-ignored). Never prints it.
set -u
cd /home/z/my-project

FLOW=/tmp/device-flow.json
TOKEN_FILE=local-github-token
STATUS=/tmp/device-poll-status

DEVICE_CODE=$(python3 -c "import json;print(json.load(open('$FLOW'))['device_code'])")
INTERVAL=$(python3 -c "import json;print(json.load(open('$FLOW'))['interval'])")
DEADLINE=$(( $(date +%s) + 880 ))   # stop just before the user code expires

: > "$STATUS"
while [ "$(date +%s)" -lt "$DEADLINE" ]; do
  RESP=$(curl -s -X POST https://github.com/login/oauth/access_token \
    -H "Accept: application/json" \
    -d "client_id=178c6fc778ccc68e1d6a" \
    -d "device_code=$DEVICE_CODE" \
    -d "grant_type=urn:ietf:params:oauth:grant-type:device_code")

  ERR=$(python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('error',''))" <<<"$RESP")

  case "$ERR" in
    authorization_pending)
      sleep "$INTERVAL" ;;
    slow_down)
      INTERVAL=$(( INTERVAL + 5 )); sleep "$INTERVAL" ;;
    expired_token|unsupported_grant_type|incorrect_client_credentials|incorrect_device_code|access_denied)
      echo "FAILED:$ERR" > "$STATUS"; exit 1 ;;
    "")
      TOKEN=$(python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('access_token',''))" <<<"$RESP")
      if [ -n "$TOKEN" ]; then
        umask 077
        printf '%s' "$TOKEN" > "$TOKEN_FILE"
        chmod 600 "$TOKEN_FILE"
        echo "OK" > "$STATUS"
        exit 0
      else
        echo "FAILED:no_token_in_response" > "$STATUS"; exit 1
      fi ;;
    *)
      sleep "$INTERVAL" ;;
  esac
done
echo "FAILED:poll_timeout" > "$STATUS"
exit 1
