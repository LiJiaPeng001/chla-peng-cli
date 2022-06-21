const { resolve, join } = require("path");
const fs = require("fs");
const chalk = require("chalk");

/**
 * @param { copiedPath: String } (被复制文件的地址，相对地址)
 * @param { resultPath: String } (放置复制文件的地址，相对地址)
 */

function filterNeedFile(filename) {
  let names = ["node_modules"];
  return names.includes(filename);
}

function copyFolder(fileName) {
  copiedPath = resolve(__dirname, `../template/${fileName}`);
  resultPath = resolve(`./${fileName}`);
  function createDir(dirPath) {
    fs.mkdirSync(dirPath);
  }
  if (fs.existsSync(resultPath)) return;
  function mkdirFils(copiedPath, resultPath) {
    if (fs.existsSync(copiedPath)) {
      createDir(resultPath);
      const files = fs.readdirSync(copiedPath, { withFileTypes: true });
      for (let i = 0; i < files.length; i++) {
        const cf = files[i];
        const ccp = join(copiedPath, cf.name);
        const crp = join(resultPath, cf.name);
        if (cf.isFile()) {
          /**
           * @des 创建文件,使用流的形式可以读写大文件
           */
          const readStream = fs.createReadStream(ccp);
          const writeStream = fs.createWriteStream(crp);
          readStream.pipe(writeStream);
          console.log(
            `${chalk.hex("#1890ff")("success")}  ${chalk.hex("#eb2f96")(
              cf.name
            )}`
          );
        } else {
          if (filterNeedFile(cf.name)) continue;
          try {
            fs.accessSync(join(crp, ".."), fs.constants.W_OK);
            mkdirFils(ccp, crp);
          } catch (error) {
            console.log("folder write error:", error);
          }
        }
      }
    } else {
      console.log("do not exist path: ", copiedPath);
    }
  }
  mkdirFils(copiedPath, resultPath);
  console.log(chalk.hex("#52c41a")("√ 安装成功"));
}

module.exports = copyFolder;
