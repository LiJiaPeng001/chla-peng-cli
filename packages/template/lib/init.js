const chalk = require("chalk");
// 用户与命令行交互的工具
const Prompt = require("inquirer");
const clone = require("./clone");
// 对应github仓库地址https://github.com/l-x-f/admin-template
// #dev 是dev分支，不写默认master分支
const remote = "github:lijiapeng001/vue3-ts-vite-template#master";
const initQuestions = (name) => [
  {
    type: "confirm",
    name: "isInit",
    message: `确定要在${chalk.green(name)}文件夹下创建项目?`,
    prefix: "?",
  },
];
const init = async (name) => {
  try {
    const { isInit } = await Prompt.prompt(initQuestions(name));
    if (isInit) {
      await clone(remote, name);
    } else {
      console.log(chalk.red("程序提前结束"));
    }
  } catch (error) {
    console.log(chalk.red(error));
  }
};
module.exports = init;
