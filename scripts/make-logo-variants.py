#!/usr/bin/env python3
"""
Generate the light-surface variant of the DrugZero Bangladesh logo.

Input : upload/drugzero-logo-transparent.svg  (official logo, white text, for dark surfaces)
Output: public/images/logo.svg            (byte-identical copy of the official file)
        public/images/logo-on-light.svg   (derived: same geometry/alpha, headline text
                                           recolored to brand green #1E4937 so it is
                                           legible on the site's white/light surfaces;
                                           leaf icon untouched)

The recolor only touches pixels inside the text block (right of the icon).
The icon region is verified pixel-identical afterwards.
"""
import base64
import re
import numpy as np
from PIL import Image

SRC = "upload/drugzero-logo-transparent.svg"
OUT_DARK = "public/images/logo.svg"
OUT_LIGHT = "public/images/logo-on-light.svg"

BRAND_PRIMARY = (30, 73, 55)  # #1E4937 — same green the site wordmark uses

svg_text = open(SRC, encoding="utf-8").read()
m = re.search(r'xlink:href="data:image/png;base64,([^"]+)"', svg_text)
b64 = m.group(1)
png_bytes = base64.b64decode(b64)

img = Image.open("/tmp/logo-decoded.png").convert("RGBA")
arr = np.array(img).astype(np.int16)  # H x W x 4
H, W = arr.shape[:2]
print(f"canvas: {W}x{H}")

rgb = arr[..., :3]
alpha = arr[..., 3]
opaque = alpha > 8

# ── 1. connected-component segmentation: the icon is one blob, text letters are others
from scipy import ndimage

labels, n = ndimage.label(opaque, structure=np.ones((3, 3), dtype=int))
icon_label = labels[100, 250]  # a pixel inside the leaf
icon_mask = labels == icon_label
print(f"components: {n} | icon component label: {icon_label}, pixels: {int(icon_mask.sum())}")
# sanity: the icon must not be connected to any text glyph
text_side = opaque & ~icon_mask
ys, xs = np.nonzero(icon_mask)
print(f"icon bbox: x {xs.min()}..{xs.max()}, y {ys.min()}..{ys.max()}")

# ── 2. classify pixels OUTSIDE the icon component
r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
near_white = (np.minimum(np.minimum(r, g), b) >= 180) & opaque & ~icon_mask
greenish = (g > r + 10) & (g > b + 10) & opaque & ~icon_mask & ~near_white

# how much white/green sits in the icon component? (must be 0 by construction)
print("near-white in icon (excluded):", int(((np.minimum(np.minimum(r, g), b) >= 180) & opaque & icon_mask).sum()))
headline_mask = near_white
tagline_mask = greenish
print("headline pixels:", int(headline_mask.sum()), "| tagline pixels:", int(tagline_mask.sum()))
txs = np.nonzero(headline_mask)[1]
tys = np.nonzero(tagline_mask)
print(f"headline x-range: {txs.min()}..{txs.max()}")
if len(tys[0]):
    print(f"tagline x-range: {tys[1].min()}..{tys[1].max()}, y-range: {tys[0].min()}..{tys[0].max()}")

# tagline anchor color sanity check
tag_px = rgb[tagline_mask]
print("tagline mean color:", tag_px.mean(axis=0).round(1))

# ── 3. choose tagline target color: darken #7ECE5F, keep hue, WCAG contrast >= 3.5 on white
def rel_lum(c):
    def f(v):
        v = v / 255.0
        return v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4
    rr, gg, bb = [f(v) for v in c]
    return 0.2126 * rr + 0.7152 * gg + 0.0722 * bb

def contrast(c):
    l1, l2 = 1.0, rel_lum(c)  # white vs color
    hi, lo = max(l1, l2), min(l1, l2)
    return (hi + 0.05) / (lo + 0.05)

tagline_orig = (126, 206, 95)
tagline_target = None
for s in (0.70, 0.65, 0.60, 0.55, 0.50, 0.45, 0.40, 0.35, 0.30):
    cand = tuple(round(v * s) for v in tagline_orig)
    if contrast(cand) >= 3.5:
        tagline_target = cand
        break
print(f"tagline target: #{tagline_target[0]:02X}{tagline_target[1]:02X}{tagline_target[2]:02X} "
      f"(contrast on white: {contrast(tagline_target):.2f}:1)")
print(f"headline target: #{BRAND_PRIMARY[0]:02X}{BRAND_PRIMARY[1]:02X}{BRAND_PRIMARY[2]:02X} "
      f"(contrast on white: {contrast(BRAND_PRIMARY):.2f}:1)")

# ── 4. apply recolor (preserve alpha exactly)
out = arr.copy()
out[headline_mask, 0] = BRAND_PRIMARY[0]
out[headline_mask, 1] = BRAND_PRIMARY[1]
out[headline_mask, 2] = BRAND_PRIMARY[2]
out[tagline_mask, 0] = tagline_target[0]
out[tagline_mask, 1] = tagline_target[1]
out[tagline_mask, 2] = tagline_target[2]
out_img = Image.fromarray(out.astype(np.uint8))

# ── 5. verify: icon component untouched, alpha untouched, dims unchanged
icon_same = bool(np.array_equal(arr[icon_mask], out[icon_mask]))
alpha_same = bool(np.array_equal(arr[..., 3], out[..., 3]))
changed = int((np.abs(arr[..., :3] - out[..., :3]).sum(axis=2) > 0).sum())
print("icon component pixel-identical:", icon_same)
print("alpha channel identical:", alpha_same)
print("total recolored pixels:", changed)
assert icon_same and alpha_same and out_img.size == img.size

# ── 6. re-encode and rebuild the SVG wrapper (attrs unchanged, payload swapped)
buf = "/tmp/logo-light.png"
out_img.save(buf, format="PNG", optimize=True)
new_b64 = base64.b64encode(open(buf, "rb").read()).decode("ascii")
light_svg = svg_text.replace(b64, new_b64)
assert 'width="1272" height="659" viewBox="0 0 1272 659"' in light_svg

import os
os.makedirs("public/images", exist_ok=True)
with open(OUT_DARK, "w", encoding="utf-8") as f:
    f.write(svg_text)  # byte-identical official file
with open(OUT_LIGHT, "w", encoding="utf-8") as f:
    f.write(light_svg)
print(f"written: {OUT_DARK} ({os.path.getsize(OUT_DARK)} bytes)")
print(f"written: {OUT_LIGHT} ({os.path.getsize(OUT_LIGHT)} bytes)")

# ── 7. sample the new variant for a visual sanity report
for x, y, label in [(700, 240, "headline 'DrugZero'"), (620, 440, "tagline"), (250, 100, "leaf")]:
    px = out[y, x]
    print(f"sample {label} ({x},{y}): rgba({px[0]},{px[1]},{px[2]},{px[3]})")
