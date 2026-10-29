"""Generate the original small GIF used inside the risk-desk doodle."""
from math import cos, pi, sin
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SIZE = 160
FRAMES = 16
INK = (32, 32, 30)
RED = (232, 75, 79)
GREEN = (78, 162, 119)
PAPER = (255, 253, 246)
frames = []

for frame_no in range(FRAMES):
    image = Image.new("RGB", (SIZE, SIZE), PAPER)
    draw = ImageDraw.Draw(image)
    for radius in (25, 48, 69):
        draw.ellipse((80-radius, 80-radius, 80+radius, 80+radius), outline=(154, 181, 158), width=2)
    draw.line((80, 8, 80, 152), fill=(192, 208, 191), width=2)
    draw.line((8, 80, 152, 80), fill=(192, 208, 191), width=2)
    angle = frame_no * 2*pi/FRAMES - pi/2
    for offset, width in ((0, 6), (-.2, 3), (-.4, 2)):
        x = 80 + 67*cos(angle+offset)
        y = 80 + 67*sin(angle+offset)
        draw.line((80, 80, x, y), fill=GREEN if offset else INK, width=width)
    draw.ellipse((74, 74, 86, 86), fill=INK)
    dot_color = RED if frame_no % 4 < 2 else INK
    draw.ellipse((114, 45, 128, 59), fill=dot_color, outline=INK, width=2)
    draw.arc((9, 9, 151, 151), 222, 296, fill=INK, width=4)
    frames.append(image)

output = Path(__file__).with_name("risk-radar.gif")
frames[0].save(output, save_all=True, append_images=frames[1:], duration=110, loop=0, optimize=True)
frames[0].save(Path(__file__).with_name("risk-radar-still.png"))
print(output)
