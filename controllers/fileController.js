const fs = require("node:fs");
const { readdir } = require("fs/promises");
const { resolve } = require("path");

exports.getFiles = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  async function getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      dirents.map(async (dirent) => {
        const res = resolve(dir, dirent.name);
        return dirent.isDirectory()
          ? { [dirent.name]: await getFiles(res) }
          : dirent.name;
      })
    );
    return files.flat();
  }
  const files = await getFiles(resolve(__dirname, "../demoFolder"));
  res.json({ data: files });
  res.end();
};

exports.writeFile = (req,res) => {
    const targetPath=resolve(__dirname, "../demoFolder/message.txt")
    fs.writeFile(targetPath,"Hello Node.js",'utf-8',()=>{})
    res.end()
}

exports.deleteFile = (req,res) => {
    const targetPath=resolve(__dirname, "../demoFolder/message.txt")
    fs.unlink(targetPath,()=>{})
}