#!/usr/bin/env python3
"""Generate the Open Graph social card (1200x630) for the EU Web Compliance landing.
Pure PIL, dark theme matching the site hero. Output: docs/og.png."""
from PIL import Image, ImageDraw, ImageFont
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "docs", "og.png")

W, H = 1200, 630
PAD = 72

# palette (site dark theme)
BG      = (11, 13, 18)
CARD    = (18, 21, 29)
CARD2   = (23, 27, 37)
BORDER  = (35, 40, 56)
INK     = (232, 236, 244)
MUTED   = (139, 148, 168)
ACCENT  = (91, 125, 255)
ASOFT   = (24, 32, 52)
MUST    = (255, 107, 125)

MONO   = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
MONOB  = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"

def f(path, size): return ImageFont.truetype(path, size)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# subtle top accent hairline
d.rectangle([0, 0, W, 4], fill=ACCENT)

# --- wordmark ---
gx, gy = PAD, 60
d.rounded_rectangle([gx, gy, gx+26, gy+26], radius=6, fill=ACCENT)
d.rounded_rectangle([gx+16, gy+6, gx+22, gy+12], radius=2, fill=BG)
wm = f(MONOB, 25)
d.text((gx+40, gy+1), "EU·WEB·COMPLIANCE", font=wm, fill=MUTED)

# --- headline ---
hf = f(MONOB, 55)
d.text((PAD, 150), "EU compliance, as a spec file", font=hf, fill=INK)
d.text((PAD, 218), "your AI agent can read.", font=hf, fill=MUTED)

# --- spec code line card ---
cy0, cy1 = 320, 398
d.rounded_rectangle([PAD, cy0, W-PAD, cy1], radius=14, fill=CARD, outline=BORDER, width=1)
cf = f(MONO, 25)
cfb = f(MONOB, 25)
tx = PAD + 26
ty = cy0 + 24
# [C-03]
seg = "[C-03] "
d.text((tx, ty), seg, font=cfb, fill=ACCENT); tx += d.textlength(seg, font=cfb)
seg = "MUST  "
d.text((tx, ty), seg, font=cfb, fill=MUST); tx += d.textlength(seg, font=cfb)
seg = "no tracker fires before consent"
d.text((tx, ty), seg, font=cf, fill=INK); tx += d.textlength(seg, font=cf)
seg = "   → ePrivacy Art. 5(3)"
d.text((tx, ty), seg, font=cf, fill=MUTED)

# --- badges ---
chips = ["206 checks", "15 areas", "35 sources", "GDPR", "ePrivacy",
         "AI Act", "DSA", "DMA"]
bf = f(MONO, 22)
bx, by = PAD, 448
ch_h = 40
for c in chips:
    tw = d.textlength(c, font=bf)
    w = tw + 30
    if bx + w > W - PAD:
        bx = PAD; by += ch_h + 12
    d.rounded_rectangle([bx, by, bx+w, by+ch_h], radius=20, fill=CARD2, outline=BORDER, width=1)
    d.text((bx+15, by+8), c, font=bf, fill=INK if c[0].isdigit() else MUTED)
    bx += w + 10

# --- footer line ---
ff = f(MONO, 22)
d.text((PAD, H-58), "Open · sourced · free  —  CC BY 4.0 + MIT", font=ff, fill=MUTED)
rt = "matteoflora.com"
d.text((W-PAD-d.textlength(rt, font=ff), H-58), rt, font=ff, fill=ACCENT)

img.save(OUT, "PNG")
print("wrote", os.path.normpath(OUT), img.size)
