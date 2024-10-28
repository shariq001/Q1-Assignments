import inquirer from 'inquirer';
let Result = 0;
let cond = true;
while (cond) {
    console.log('Hello and Welcome to Command Line Calculator');
    const userChoice = await inquirer.prompt([{
            name: 'UserChoice',
            message: "Do you want to use Calculator",
            type: 'list',
            choices: ['Yes', 'No']
        }]);
    if (userChoice.UserChoice === 'Yes') {
        const num1 = await inquirer.prompt([{
                name: 'Num1',
                type: 'number',
                message: 'Please Enter Your First Number:'
            }]);
        const num2 = await inquirer.prompt([{
                name: 'Num2',
                type: 'number',
                message: "Please Enter Your Second Number:"
            }]);
        let operators = await inquirer.prompt([{
                name: 'Operators',
                type: 'list',
                choices: ['+', '-', '*', '/', '%'],
                message: 'Please Select an Operator below:'
            }]);
        if (operators.Operators === '+') {
            Result = num1.Num1 + num2.Num2;
            console.log(Result);
        }
        else if (operators.Operators === '-') {
            Result = num1.Num1 - num2.Num2;
            console.log(Result);
        }
        else if (operators.Operators === '*') {
            Result = num1.Num1 * num2.Num2;
            console.log(Result);
        }
        else if (operators.Operators === '/') {
            Result = num1.Num1 / num2.Num2;
            console.log(Result);
        }
        else if (operators.Operators === '%') {
            Result = num1.Num1 % num2.Num2;
            console.log(Result);
        }
    }
    else {
        cond = false;
    }
}
