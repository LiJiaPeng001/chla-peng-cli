// node的 util 模块 promisify可以把回调promise化
const { promisify } = require("util");
// 进度显示工具
const ora = require("ora");
// 颜色显示工具
const chalk = require("chalk");
// 下载git 仓库代码工具
const download = promisify(require("download-git-repo"));
/**
 *
 * @param {string} repo 仓库地址
 * @param {string}  dir 文件夹
 * @param {object}  opotions 配置项
 */
const clone = async function (repo, dir, opotions = {}) {
  const process = ora(`开始下载 ${chalk.blue(repo)}`);
  process.start();
  process.color = "yellow";
  process.text = `正在下载..... ${chalk.yellow(repo)} `;
  try {
    await download(repo, dir, opotions);
    process.color = "green";
    process.text = `下载成功 ${chalk.green(repo)} `;
    process.succeed();
  } catch (error) {
    process.color = "red";
    process.text = "下载失败";
    process.fail();
  }
};
module.exports = clone;
