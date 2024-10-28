import inquirer from 'inquirer'

console.log('Hello and Welcome to the Command line Currency Converter by Muhammad Shariq');

let condition:boolean = true

while(condition) {
    let userChoice = await inquirer.prompt([{
        name: 'UserChoice',
        type: 'list',
        choices: ['Yes', 'No'],
        message: 'Do you want to use Currency Converter'
    }])

    if(userChoice.UserChoice === 'Yes') {
        const currency:any = {
            USD : 1, // Base Currency
            EUR : 0.91,
            GBP : 0.76,
            INR : 74.57,
            PKR : 280
        }
            
        let userAns = await inquirer.prompt([
            {
            name: 'From',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
            message: 'Enter Your Currency'
            },
            {
                name: 'To',
                type: 'list',
                choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
                message: 'Enter Currency to which you want to exchange!'
            },
            {
                name: 'Amount',
                type: 'number',
                message: 'Enter Your Amount'
            }
        ])
            
        let fromAmount = currency[userAns.From]
        let toAmount = currency[userAns.To]
        let Amount = userAns.Amount
            
        let baseAmount = Amount / fromAmount
        let convertedAmount = baseAmount * toAmount
        console.log(Math.round(convertedAmount));
    } else {
        condition = false
    }
}