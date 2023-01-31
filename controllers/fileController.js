const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')
const { resolve } = require('path');

exports.getFiles = async(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    async function getFiles(dir) {
        const dirents = await readdir(dir, { withFileTypes: true });
        const files = await Promise.all(dirents.map(async(dirent) => {
          const res = resolve(dir, dirent.name);
          return dirent.isDirectory() ? {[dirent.name]: await getFiles(res)} : dirent.name;
        }));
        return files.flat();
      }
     const files = await getFiles(path.resolve(__dirname, '../demoFolder'))
     res.json({data:files})
     res.end()
    }