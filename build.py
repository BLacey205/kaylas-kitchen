"""Build Kayla's Kitchen from src/.

Writes:
  index.html            standalone page for GitHub Pages (full HTML document)
  dist/artifact.html    page body for the Claude artifact (host adds the skeleton)

Usage: python3 build.py
"""
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
DATA_FILES = ["data1.js", "data2.js", "data3.js", "data4.js", "data5.js"]

HEAD = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Kayla's Kitchen: 50 Southern comfort classics with step-by-step cook mode, herbs and spices guide, cooking methods, lessons and a cooking journal.">
<meta name="theme-color" content="#2D5B44">
"""
RESET = "<style>:root{padding-top:env(safe-area-inset-top,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n"


def main():
    app = (SRC / "app.html").read_text(encoding="utf-8")
    data = "".join((SRC / f).read_text(encoding="utf-8") for f in DATA_FILES)
    if "/*DATA*/" not in app:
        raise SystemExit("app.html is missing the /*DATA*/ marker")
    body = app.replace("/*DATA*/", data)

    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist" / "artifact.html").write_text(body, encoding="utf-8")

    cut = body.index("</style>") + len("</style>")
    page = HEAD + body[:cut] + "\n" + RESET + "</head>\n<body>\n" + body[cut:] + "\n</body>\n</html>\n"
    (ROOT / "index.html").write_text(page, encoding="utf-8")
    print("built index.html and dist/artifact.html")


if __name__ == "__main__":
    main()
