# Pillow: https://pillow.readthedocs.io/en/stable/reference/Image.html#PIL.Image.Image.thumbnail

from PIL import Image
import glob, os

print("Creating thumbnails...")

# Max size of the thumbnail. The aspect ratio will be preserved.
size = 900, 900

for infile in glob.glob("*.png"):
    file, ext = os.path.splitext(infile)
    with Image.open(infile) as im:
        im.thumbnail(size)
        new_thumbnail = os.path.join(os.getcwd(), "thumbnails/") + file + "_thumb" + ext
        print("Printing thumbnail to: ")
        print(new_thumbnail)
        im.save(new_thumbnail, "PNG")

print("Thumbnails generated.")