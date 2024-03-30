#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Initialize user balance and pin code
let myBalance = 10000;
let myPin = 4321;

//Printing a Welcome message
console.log(chalk.blueBright("\n \tWelcome to Areesha Iqbal - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.gray("Enter your pin:"),
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.greenBright("\nCorrect pin code!!!\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.gray("Select your operation"),
      type: "list",
      choices: ["Withdraw", "Fast cash", "Check balance"],
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: chalk.gray("Enter your amount"),
        type: "number",
      },
    ]);

    // Use Assignment operator = += -=
    if (amountAns.amount > myBalance) {
      console.log(chalk.red("Insufficient balance"));
    } else {
      myBalance -= amountAns.amount;
      console.log(chalk.green(`Your remaining balance is ${myBalance}`));
    }
  } else if (operationAns.operation === "Fast cash") {
    let fast = await inquirer.prompt([
      {
        name: "fastcash",
        message: chalk.green(
          chalk.gray("Select the amount which you withdrawal")
        ),
        type: "list",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);
    myBalance -= fast.fastcash;
    console.log(
      chalk.green(
        `You have successfully withdrawal ${fast.fastcash} \nYour remaining balance is ${myBalance}`
      )
    );
  } else if (operationAns.operation === "Check balance") {
    console.log(chalk.yellow(`Your remaining balance is ${myBalance}`));
  }
} else {
  console.log(chalk.red("Incorrect pin code"));
}
