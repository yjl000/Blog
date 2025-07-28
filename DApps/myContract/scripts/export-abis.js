const fs = require("fs");
const path = require("path");

// 源artifacts目录
const artifactsDir = path.join(__dirname, "../contracts/artifacts");
// 目标ABI目录
const outputDir = path.join(__dirname, "../../DApps/web/src/ABI");

// 过滤出所有.json文件（不含_metadata）
const files = fs.readdirSync(artifactsDir).filter(f => f.endsWith('.json') && !f.endsWith('_metadata.json'));

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

files.forEach(file => {
  const artifactPath = path.join(artifactsDir, file);
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  const abi = artifact.abi;
  if (abi) {
    const abiFileName = file.replace('.json', '.abi.json');
    const outputPath = path.join(outputDir, abiFileName);
    fs.writeFileSync(outputPath, JSON.stringify(abi, null, 2), "utf8");
    console.log(`已导出ABI: ${outputPath}`);
  }
});
