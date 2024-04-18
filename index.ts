import inquirer from 'inquirer'



const currancy: any ={
    USD: 1,    //BASE CURRANCY
    EUR: 0.91,
    GBR: 0.76,
    INR: 78.50,
    PKR: 288,
}

let user_answer = await inquirer.prompt([{
    name:"from",
    message:" Enter from currancy",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name:"To",
    message:" Enter To currancy",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
       {
        name:"amount",
        type:"number",
        message: "Enter your amount"

       }

])
let fromAmount = currancy [user_answer.from];
let toAmount = currancy [user_answer.To];
let amount= user_answer.amount;
let Basedcurrancy = amount / fromAmount
let convertedAmount = Basedcurrancy * toAmount;


console.log(convertedAmount);
