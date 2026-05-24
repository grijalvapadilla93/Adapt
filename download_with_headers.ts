import fs from "fs";
import https from "https";
import path from "path";
import { URL } from "url";

const dir = path.join(process.cwd(), "public", "videos");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const destPath = path.join(dir, "hero_bg.mp4");
const file = fs.createWriteStream(destPath);
const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-athletic-man-and-woman-training-on-treadmills-40279-large.mp4";

console.log("Downloading video with custom headers...");

function download(urlStr: string) {
  const parsedUrl = new URL(urlStr);
  const options = {
    hostname: parsedUrl.hostname,
    path: parsedUrl.pathname + parsedUrl.search,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Referer": "https://mixkit.co/",
      "Accept": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5"
    }
  };

  https.get(options, (response) => {
    console.log("Status Code:", response.statusCode);
    console.log("Headers:", response.headers);

    if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      console.log("Redirecting to:", response.headers.location);
      // Follow redirect
      download(response.headers.location);
    } else {
      response.pipe(file);
      
      file.on("finish", () => {
        file.close();
        const stats = fs.statSync(destPath);
        console.log("Download complete. File size:", stats.size, "bytes");
        process.exit(0);
      });
    }
  }).on("error", (err) => {
    console.error("Error downloading:", err.message);
    process.exit(1);
  });
}

download(videoUrl);
