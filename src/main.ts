import "dotenv/config";
import express, { Request, Response } from "express";
import multer, { memoryStorage } from "multer";
import { Sharp } from "./sharp";

const app = express();
const PORT = process.env.PORT;

const upload = multer({
  storage: memoryStorage(),
});

const sharpUpload = new Sharp();

app.get("/", (req, res) => {
  res.json({
    message: "Application Is Running",
  });
});

app.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  const buf = req.file?.buffer;
  sharpUpload.createThumb(buf, 200, 200, "contain", "#000");

  res.send("arquivo recebido");
});

app.listen(PORT, () => {
  console.log(`Application Is Running in the port ${PORT}`);
});
