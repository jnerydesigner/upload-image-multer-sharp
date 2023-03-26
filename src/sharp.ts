import sharp from "sharp";
import { randomUUID } from "crypto";

export class Sharp {
  createThumb(
    buffer: any,
    w: number,
    h: number,
    fit: "cover" | "contain" | "fill",
    bg: string
  ) {
    const idUnique = randomUUID();

    sharp(buffer)
      .resize(w, h, {
        kernel: sharp.kernel.nearest,
        fit: fit,
        position: "center",
        background: bg,
      })
      .toFile(`./uploads/${idUnique}.png`);
  }
}
