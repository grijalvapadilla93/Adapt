import fs from "fs";
import path from "path";

function getAllImages(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (file === "node_modules" || file === ".git" || file === "dist") continue;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllImages(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".png", ".jpg", ".jpeg", ".webp", ".gif"].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

console.log("All image files in workspace:");
const images = getAllImages(process.cwd());
for (const file of images) {
  const stats = fs.statSync(file);
  console.log(`- ${path.relative(process.cwd(), file)}: size=${stats.size} bytes, modified=${stats.mtime.toISOString()}`);
}
