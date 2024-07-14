import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 20 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        message: "Guess a number bt 1-20",
        type: "number"
    },
]);
if (answer.guessNumber === randomNumber) {
    console.log("congtratulation! You select a right Number");
}
else {
    console.log("Oop! You select a wrong Number");
}
