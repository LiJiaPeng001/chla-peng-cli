#!/usr/bin/env node
const inquirer = require("inquirer");
const { Command } = require("commander");
const ora = require("ora");

const program = new Command();

program.version("0.0.1");

program.option("--init", "this is init", () => {
  const spinner = ora({
    text: "安装中...",
  });
  inquirer
    .prompt([
      {
        type: "list",
        name: "lib",
        message: "选择用到的框架：",
        choices: ["vite-ts", "loading", "loading", "loading"],
      },
    ])
    .then(({ lib }) => {
      console.log(lib);
      spinner.start();
      setTimeout(() => {
        // spinner.stop();
        spinner.succeed("安装成功");
        // console.log("安装成功");
      }, 1000);
    });
});

program.parse(process.argv); // 放在后面
