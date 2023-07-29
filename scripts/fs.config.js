const fs = require("fs");
const path = require("path");

/** 删除文件 */
function removeFiles(sourceDir) {
  if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);

    files.forEach((file) => {
      const filePath = path.join(sourceDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // 递归删除子目录
        removeFiles(filePath);
      } else {
        // 删除文件
        fs.unlinkSync(filePath);
      }
    });

    // 删除空目录
    fs.rmdirSync(sourceDir);
  }
}

/** 复制文件到指定目录 */
function copyFiles(sourceDir, targetDir) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFiles = ["LICENSE", "README.md", "package.json"];

  const files = fs
    .readdirSync(sourceDir)
    .filter((file) => targetFiles.includes(file));

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    const stats = fs.statSync(sourcePath);

    if (stats.isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
    } else if (stats.isDirectory()) {
      copyFiles(sourcePath, targetPath);
    }
  });
}

(function () {
  const args = process.argv.slice(2);
  const cmd = args[0];
  const sourceDir = args[1];
  const targetDir = args[2];

  if (cmd === "rm") {
    removeFiles(sourceDir);
  }

  if (cmd === "cp") {
    copyFiles(sourceDir, targetDir || `${sourceDir} Copy`);
  }
})();
