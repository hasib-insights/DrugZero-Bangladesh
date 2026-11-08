#!/usr/bin/env python3
"""
Derive the site favicon from the OFFICIAL logo (public/images/logo.svg,
byte-identical to the file provided by the organization).

- Extracts the icon mark (the green "0" + leaf) via connected-component
  segmentation — exactly the same region the variant script treats as
  untouchable, so the mark itself is pixel-identical to the official art.
- Composites it, centered and un-stretched, on the brand's dark-green
  rounded square (#1E4937) — replacing the temporary placeholder favicon
  that shipped with the site (src/app/icon.svg).
- The official logo files themselves are NOT modified.
"""
import base64
import io
import re

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

SRC = "public/images/logo.svg"
OUT = "src/app/icon.png"
SIZE = 128  # crisp at 16-32px tab sizes, standard favicon retina size
BRAND_PRIMARY = (30, 73, 55)  # #1E4937
RADIUS = 28  # matches the rounded-corner look of the placeholder it replaces

svg_text = open(SRC, encoding="utf-8").read()
b64 = re.search(r'xlink:href="data:image/png;base64,([^"]+)"', svg_text).group(1)
img = Image.open(io.BytesIO(base64.b64decode(b64))).convert("RGBA")
arr = np.array(img)

# ── icon component = the connected opaque blob containing the leaf pixel
opaque = arr[..., 3] > 8
labels, n = ndimage.label(opaque, structure=np.ones((3, 3), dtype=int))
icon_label = labels[100, 250]  # pixel inside the leaf (same seed as variant script)
icon_mask = labels == icon_label

ys, xs = np.nonzero(icon_mask)
x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
print(f"icon bbox: x {x0}..{x1}, y {y0}..{y1}  ({x1-x0+1}x{y1-y0+1} px)")

icon = img.crop((x0, y0, x1 + 1, y1 + 1))

# ── fit inside the canvas with even padding, natural aspect ratio preserved
pad = SIZE // 8  # 16px breathing room on a 128 canvas
avail = SIZE - 2 * pad
scale = min(avail / icon.width, avail / icon.height)
w, h = round(icon.width * scale), round(icon.height * scale)
icon_resized = icon.resize((w, h), Image.LANCZOS)
print(f"icon fitted: {w}x{h} (scale {scale:.3f}, aspect kept)")

canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
draw = ImageDraw.Draw(canvas)
draw.rounded_rectangle([0, 0, SIZE - 1, SIZE - 1], radius=RADIUS, fill=BRAND_PRIMARY + (255,))
canvas.alpha_composite(icon_resized, ((SIZE - w) // 2, (SIZE - h) // 2))
canvas.save(OUT, format="PNG", optimize=True)
print(f"written: {OUT} ({len(open(OUT, 'rb').read())} bytes)")
