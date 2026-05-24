import fs from "fs";
import https from "https";
import path from "path";

const destPath = path.join(process.cwd(), "public", "videos", "oceans_test.mp4");
const file = fs.createWriteStream(destPath);
const url = "https://vjs.zencdn.net/v/oceans.mp4";

console.log("Downloading Oceans trailer from ZenCDN...");

https.get(url, (response) => {
  response.pipe(file);
  file.on("finish", () => {
    file.close();
    const stats = fs.statSync(destPath);
    console.log("Oceans download complete. File size:", stats.size, "bytes");
    process.exit(0);
  });
}).on("error", (err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
