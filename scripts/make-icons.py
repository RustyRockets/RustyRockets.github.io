"""Generate the site icons from the pixel rocket in src/components/PixelRocket.astro.

The rocket's pixel grid lives in that component, so this script parses it from
there rather than keeping a second copy. Re-run after editing the grid:

    python3 scripts/make-icons.py

Outputs (both show the rocket on a dark rounded tile, which stays visible on
light and dark browser tabs alike):
    public/favicon.svg          browser tab icon
    public/apple-touch-icon.png home-screen / bookmark icon (iOS, Safari)

Uses only the Python standard library.
"""

import re
import struct
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COMPONENT = ROOT / "src/components/PixelRocket.astro"

# Fixed colors (a tab icon can't follow the page theme): the site's dark-mode
# palette on a near-black tile.
TILE = "#1c1d1f"
COLORS = {
    "B": "#ecebe7",  # body
    "R": "#6cc3b6",  # porthole rim
    "G": TILE,       # porthole glass, same as the tile
    "F": "#6cc3b6",  # fins
    "O": "#f08a3c",  # flame
    "Y": "#ffc94d",  # flame core
}

CANVAS = 23          # tile size in grid cells (odd, so the 13-wide rocket centers exactly)
CORNER = 5           # tile corner radius in cells
PNG_SCALE = 8        # screen pixels per cell for the PNG (23 * 8 = 184 px)


def read_grid() -> list[str]:
    """Pull the quoted rows out of the `const grid = [ ... ];` block."""
    source = COMPONENT.read_text()
    block = re.search(r"const grid = \[(.*?)\];", source, re.S)
    if not block:
        raise SystemExit(f"Could not find the pixel grid in {COMPONENT}")
    rows = re.findall(r"'([^']*)'", block.group(1))
    if len({len(r) for r in rows}) != 1:
        raise SystemExit("Grid rows must all be the same width")
    return rows


def placed_pixels(grid: list[str]):
    """Yield (x, y, color) for each rocket pixel, centered on the tile."""
    off_x = (CANVAS - len(grid[0])) // 2
    off_y = (CANVAS - len(grid)) // 2
    for y, row in enumerate(grid):
        for x, c in enumerate(row):
            if c in COLORS:
                yield x + off_x, y + off_y, COLORS[c]


def write_svg(grid: list[str]) -> None:
    rects = "".join(
        f'<rect x="{x}" y="{y}" width="1" height="1" fill="{color}"/>'
        for x, y, color in placed_pixels(grid)
    )
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {CANVAS} {CANVAS}" '
        f'shape-rendering="crispEdges">'
        f'<rect width="{CANVAS}" height="{CANVAS}" rx="{CORNER}" fill="{TILE}" '
        f'shape-rendering="geometricPrecision"/>{rects}</svg>\n'
    )
    (ROOT / "public/favicon.svg").write_text(svg)


def hex_rgb(h: str) -> tuple[int, int, int]:
    return tuple(int(h[i : i + 2], 16) for i in (1, 3, 5))


def inside_tile(px: float, py: float, size: float, radius: float) -> bool:
    """True if a point lies within the rounded-corner tile."""
    cx = min(max(px, radius), size - radius)
    cy = min(max(py, radius), size - radius)
    return (px - cx) ** 2 + (py - cy) ** 2 <= radius**2


def write_png(grid: list[str]) -> None:
    size = CANVAS * PNG_SCALE
    radius = CORNER * PNG_SCALE
    cells = {(x, y): hex_rgb(c) for x, y, c in placed_pixels(grid)}
    tile = hex_rgb(TILE)

    raw = bytearray()
    for py in range(size):
        raw.append(0)  # PNG filter type 0 (none) for each scanline
        for px in range(size):
            if not inside_tile(px + 0.5, py + 0.5, size, radius):
                raw += b"\x00\x00\x00\x00"  # transparent outside the rounded tile
                continue
            r, g, b = cells.get((px // PNG_SCALE, py // PNG_SCALE), tile)
            raw += bytes((r, g, b, 255))

    def chunk(kind: bytes, data: bytes) -> bytes:
        return struct.pack(">I", len(data)) + kind + data + struct.pack(">I", zlib.crc32(kind + data))

    png = (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))  # 8-bit RGBA
        + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
        + chunk(b"IEND", b"")
    )
    (ROOT / "public/apple-touch-icon.png").write_bytes(png)


if __name__ == "__main__":
    grid = read_grid()
    write_svg(grid)
    write_png(grid)
    print(f"Wrote favicon.svg and apple-touch-icon.png from a {len(grid[0])}x{len(grid)} grid")
