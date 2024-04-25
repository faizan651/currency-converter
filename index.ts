#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1.0, //Base currency
  EUR: 0.93,
  JPY: 154.91,
  GBP: 0.8,
  INR: 83.33,
  PKR: 278.45,
};

let user_input = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "JPY", "GBP", "INR", "PKR"],
  },

  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "JPY", "GBP", "INR", "PKR"],
  },

  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let fromAmount = currency[user_input.from];
let toAmount = currency[user_input.to];
let amount = user_input.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(
  `Converted currency amount is equal to ${convertedAmount.toFixed(2)} ${user_input.to}`
);
