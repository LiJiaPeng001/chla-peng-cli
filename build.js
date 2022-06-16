const inquirer = require("inquirer");
const { Command } = require("commander");
const copyFolder = require("./utils/copyFile");

const program = new Command();

program.name("chia-peng-cli").version("0.0.1");

program.option("--init", "初始化项目", (e) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "lib",
        message: "选择用到的框架：",
        choices: ["vite-vue-ts", "loading", "loading", "loading"],
      },
    ])
    .then(async ({ lib }) => {
      copyFolder(lib);
    });
});

program.parse(process.argv); // 放在后面
