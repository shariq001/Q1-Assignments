import inquirer from "inquirer";
let condition = true;
while (condition) {
    console.log('Hello and Welcome to the Number Guessing Game by Muhammad Shariq');
    let userChoice = await inquirer.prompt([{
            name: 'UserChoice',
            type: "list",
            choices: ['Yes', 'No'],
            message: 'Do you want to play the Game?'
        }]);
    if (userChoice.UserChoice === 'Yes') {
        let randomNumber = Math.random() * 10;
        randomNumber = Math.floor(randomNumber);
        let userGuessed = await inquirer.prompt([{
                name: 'UserGuessed',
                type: 'number',
                message: 'Guess a Number from 1 - 10'
            }]);
        if (userGuessed.UserGuessed === randomNumber) {
            console.log(`Congratulations you guessed the right number! ` + randomNumber);
        }
        else {
            console.log(`Sorry! The correct number was ` + randomNumber);
        }
    }
    else {
        condition = false;
    }
}
