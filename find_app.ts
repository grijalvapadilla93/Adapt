import fs from "fs";
import path from "path";

try {
  const p = path.resolve(process.cwd(), "..");
  console.log("Parent directory contents:", fs.readdirSync(p));
  
  // Look for any video file inside process.cwd() or ..
  const parentFiles = fs.readdirSync(p);
  for (const f of parentFiles) {
    if (f.endsWith(".mp4") || f.endsWith(".mov")) {
      console.log("Found video in parent:", f);
    }
  }
} catch (e: any) {
  console.log("Error:", e.message);
}
