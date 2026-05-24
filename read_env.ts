import fs from "fs";
import path from "path";

try {
  const file = path.join(process.cwd(), "..", ".dev.env.json");
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    console.log("Keys in .dev.env.json:", Object.keys(data));
    for (const [k, v] of Object.entries(data)) {
      if (typeof v === "string" && (v.startsWith("http") || v.includes("mp4") || v.includes("lh3"))) {
        console.log(`Key: ${k}, Value: ${v}`);
      }
    }
  } else {
    console.log("file does not exist");
  }
} catch (e: any) {
  console.log("Error:", e.message);
}
