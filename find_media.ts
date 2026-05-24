import fs from "fs";
import path from "path";

function walk(dir: string) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (file === "node_modules" || file === ".git" || file === "dist") {
      continue;
    }
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      if (file.endsWith(".mp4") || file.endsWith(".mov") || file.endsWith(".avi") || stat.size > 100000) {
        console.log("Found file:", fullPath, "Size:", stat.size);
      }
    }
  }
}

console.log("Searching for video/media files in workspace...");
walk(process.cwd());
