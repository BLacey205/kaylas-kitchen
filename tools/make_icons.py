"""Draw the Kayla's Kitchen app icon (skillet with a K on gingham green) at every size the install needs."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

GREEN, DARK, CREAM, GOLD, IRON = (45, 91, 68), (27, 58, 43), (246, 232, 195), (231, 180, 60), (29, 40, 34)
S = 1024


def draw(maskable=False):
    img = Image.new("RGB", (S, S), GREEN)
    d = ImageDraw.Draw(img, "RGBA")
    # gingham tablecloth
    step = 64
    for i in range(0, S, step * 2):
        d.rectangle([i, 0, i + step - 1, S], fill=(255, 255, 255, 22))
        d.rectangle([0, i, S, i + step - 1], fill=(255, 255, 255, 22))
    scale = 0.78 if maskable else 0.9          # maskable icons keep art inside the safe circle
    cx, cy, r = S * 0.46, S * 0.54, S * 0.30 * scale
    # handle (drawn first so the pan sits on top)
    hw, hl = S * 0.075 * scale, S * 0.30 * scale
    import math
    a = math.radians(-35)
    x0, y0 = cx + math.cos(a) * r * 0.9, cy + math.sin(a) * r * 0.9
    x1, y1 = x0 + math.cos(a) * hl, y0 + math.sin(a) * hl
    nx, ny = -math.sin(a) * hw / 2, math.cos(a) * hw / 2
    d.polygon([(x0 + nx, y0 + ny), (x1 + nx, y1 + ny), (x1 - nx, y1 - ny), (x0 - nx, y0 - ny)], fill=IRON)
    d.ellipse([x1 - hw / 2, y1 - hw / 2, x1 + hw / 2, y1 + hw / 2], fill=IRON)
    # skillet: iron rim, cream inside
    d.ellipse([cx - r - S * 0.03, cy - r - S * 0.03, cx + r + S * 0.03, cy + r + S * 0.03], fill=(0, 0, 0, 60))
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=IRON)
    ri = r * 0.82
    d.ellipse([cx - ri, cy - ri, cx + ri, cy + ri], fill=CREAM)
    # gold K
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", int(ri * 1.25))
    box = d.textbbox((0, 0), "K", font=font)
    tw, th = box[2] - box[0], box[3] - box[1]
    d.text((cx - tw / 2 - box[0], cy - th / 2 - box[1]), "K", font=font, fill=GOLD, stroke_width=int(S * 0.008), stroke_fill=DARK)
    return img


out = Path(__file__).resolve().parent.parent / "icons"
out.mkdir(exist_ok=True)
base, mask = draw(), draw(maskable=True)
for size in (512, 192, 180, 32):
    base.resize((size, size), Image.LANCZOS).save(out / f"icon-{size}.png", optimize=True)
mask.resize((512, 512), Image.LANCZOS).save(out / "icon-maskable-512.png", optimize=True)
print("icons written to", out)
