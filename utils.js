import fs from "fs";
import { Readable } from "stream";
import { finished } from "stream/promises";
import path from "path";

const downloadFile = async (url, outputPath) => {
  console.log(`downloading ${url} to ${outputPath}`);
  const res = await fetch(url);
  const destination = path.resolve(outputPath);
  const fileStream = fs.createWriteStream(destination, { flags: "wx" });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  console.log(`download complete`);
};

export default downloadFile;
