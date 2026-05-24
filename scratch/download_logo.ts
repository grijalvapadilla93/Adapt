import fs from "fs";
import https from "https";
import path from "path";

const imgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCaGgiJqwZhIM1Oi-YZAlhfgG-ajpmxLG4y-nv6sFHhjs7rWyZFEyocQvyuyU_t6MA8b6t6WE3Pesp6K2TQcyu7GrQnEAEmJ2M-LsIDlL6R77LPEbZIbNUNQWgaJ9mnc_VE0aRtuk_qeJNbaEiZ-q_ooSLFhqWzEYhCJfaNXiwWlSK_Tugf2_FjZAcDyqQbbuYswavBxUUuSLdJK7LGnElieUCSelsqRPYF785uLesLgbq3WlNhixsQ2KRoZtj7gd__RR9y_Sj-Hl6X";

const dir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const destPath = path.join(dir, "logo.png");
const file = fs.createWriteStream(destPath);

console.log("Downloading logo to:", destPath);

https.get(imgUrl, (response) => {
  if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
    console.log("Following redirect to:", response.headers.location);
    // Follow redirect
    https.get(response.headers.location, (res) => {
      res.pipe(file);
    });
  } else {
    response.pipe(file);
  }

  file.on("finish", () => {
    file.close();
    const stats = fs.statSync(destPath);
    console.log("Logo download complete! Size:", stats.size, "bytes");
    process.exit(0);
  });
}).on("error", (err) => {
  console.error("Error downloading:", err.message);
  process.exit(1);
});
