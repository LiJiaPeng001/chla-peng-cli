const inquirer = require("inquirer");
const { Command } = require("commander");
const copyFolder = require("./utils/copyFile");
const fs = require("fs");

const program = new Command();

program.name("chia-peng-cli").version("0.0.1");

program.option("--init", "初始化项目", (e) => {
  fs.readdir("./template", function (err, choices) {
    inquirer
      .prompt([
        {
          type: "list",
          name: "lib",
          message: "选择用到的框架：",
          choices,
        },
      ])
      .then(async ({ lib }) => {
        copyFolder(lib);
      });
  });
});

program.parse(process.argv); // 放在后面
