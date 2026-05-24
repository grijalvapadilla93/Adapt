import fs from "fs";
import https from "https";
import path from "path";

const destPath = path.join(process.cwd(), "public", "videos", "sintel_test.mp4");
const file = fs.createWriteStream(destPath);
const url = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

console.log("Downloading Sintel trailer from W3C...");

https.get(url, (response) => {
  response.pipe(file);
  file.on("finish", () => {
    file.close();
    const stats = fs.statSync(destPath);
    console.log("W3C download complete. File size:", stats.size, "bytes");
    process.exit(0);
  });
}).on("error", (err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
