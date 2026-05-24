import fs from "fs";
import path from "path";

try {
  const file = path.join(process.cwd(), "public", "videos", "test_video.mp4");
  console.log("Content:", fs.readFileSync(file, "utf8"));
} catch (e: any) {
  console.log("Error:", e.message);
}
