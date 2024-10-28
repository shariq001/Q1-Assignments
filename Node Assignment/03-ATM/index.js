import inquirer from "inquirer";
let condition = true;
let Balance = 0;
const PIN = 1234;
console.log('Hello and Welcome to Command Line ATM by Muhammad Shariq');
while (condition) {
    let enterPin = await inquirer.prompt([{
            name: "EnterPIN",
            type: 'number',
            message: 'Please Enter PIN to use ATM (hint: 1234)'
        }]);
    if (enterPin.EnterPIN === PIN) {
        while (condition) {
            let userChoice = await inquirer.prompt([{
                    name: "UserChoice",
                    type: 'list',
                    choices: ['Yes', 'No'],
                    message: "Do you want to use ATM Machine?"
                }]);
            if (userChoice.UserChoice === 'Yes') {
                let operations = await inquirer.prompt([{
                        name: 'Operations',
                        type: 'list',
                        choices: ['Deposit', 'Transfer', 'Check Balance', 'Fast Cash', 'Withdraw'],
                        message: 'Please Select an Operation!'
                    }]);
                if (operations.Operations === 'Deposit') {
                    let depositMethod = await inquirer.prompt([{
                            name: 'DepositMethod',
                            type: 'list',
                            choices: ['Easy Paisa', 'Jazz Cash'],
                            message: 'Please Select Method by which you want to Deposit Money.'
                        }]);
                    if (depositMethod.DepositMethod === 'Easy Paisa') {
                        let easyPaisaAcc = await inquirer.prompt([{
                                name: 'EasyPaisaAcc',
                                type: 'number',
                                message: 'Enter your Easy Paisa Account Number'
                            }]);
                        let easyPaisaAmount = await inquirer.prompt([{
                                name: 'EasyPaisaAmount',
                                type: 'number',
                                message: "Enter amount you want to Deposit:"
                            }]);
                        if (easyPaisaAmount.EasyPaisaAmount < 2000) {
                            console.log('Enter sufficient Amount to Deposit');
                        }
                        else {
                            Balance += easyPaisaAmount.EasyPaisaAmount;
                            console.log(`Successfully Deposited ${easyPaisaAmount.EasyPaisaAmount}!`);
                        }
                    }
                    else if (depositMethod.DepositMethod === 'Jazz Cash') {
                        let jazzCashAcc = await inquirer.prompt([{
                                name: 'JazzCashAcc',
                                type: 'number',
                                message: 'Enter your Jazz Cash Account Number'
                            }]);
                        let jazzCashAmount = await inquirer.prompt([{
                                name: 'JazzCashAmount',
                                type: 'number',
                                message: "Enter amount you want to Deposit:"
                            }]);
                        if (jazzCashAmount.JazzCashAmount < 2000) {
                            console.log('Enter sufficient Amount to Deposit');
                        }
                        else {
                            Balance += jazzCashAmount.JazzCashAmount;
                            console.log(`Successfully Deposited ${jazzCashAmount.JazzCashAmount}!`);
                        }
                    }
                }
                else if (operations.Operations === 'Check Balance') {
                    console.log(Balance);
                }
                else if (operations.Operations === 'Fast Cash') {
                    let fastCash = await inquirer.prompt([{
                            name: 'FastCash',
                            type: 'list',
                            choices: [2000, 5000, 10000],
                            message: 'Please Select Amount you want to withdraw'
                        }]);
                    if (fastCash.FastCash === 2000) {
                        Balance -= 2000;
                        console.log(`Successfully Withdrawed ${fastCash.FastCash}!`);
                    }
                    else if (fastCash.FastCash === 5000) {
                        Balance -= 5000;
                        console.log(`Successfully Withdrawed ${fastCash.FastCash}!`);
                    }
                    else if (fastCash.FastCash === 10000) {
                        Balance -= 10000;
                        console.log(`Successfully Withdrawed ${fastCash.FastCash}!`);
                    }
                }
                else if (operations.Operations === 'Withdraw') {
                    let withdrawAmount = await inquirer.prompt([{
                            name: 'WithdrawAmount',
                            type: 'number',
                            message: 'Enter Amount you want to Withdraw'
                        }]);
                    if (withdrawAmount.WithdrawAmount > Balance || withdrawAmount.WithdrawAmount < 2000) {
                        console.log('Enter Sufficient Amount to Withdraw');
                    }
                    else {
                        Balance -= withdrawAmount.WithdrawAmount;
                        console.log(`Successfully Withdrawed ${withdrawAmount.WithdrawAmount}!`);
                    }
                }
                else if (operations.Operations === 'Transfer') {
                    let transferAmount = await inquirer.prompt([{
                            name: 'TransferAmount',
                            type: 'number',
                            message: 'Please Enter Amount you want to Transfer'
                        }]);
                    if (transferAmount.TransferAmount > Balance || transferAmount.TransferAmount < 2000) {
                        console.log('Enter Sufficient Amount to Transfer');
                    }
                    else {
                        let transferMethod = await inquirer.prompt([{
                                name: 'TransferMethod',
                                type: 'list',
                                choices: ['Bank Transfer', 'Easy Paisa', 'Jazz Cash'],
                                message: 'Please Select Transfer Method'
                            }]);
                        if (transferMethod.TransferMethod === 'Bank Transfer') {
                            let bankAcc = await inquirer.prompt([{
                                    name: 'BankAcc',
                                    type: 'number',
                                    message: 'Please Enter Bank Account Number'
                                }]);
                            Balance -= transferAmount.TransferAmount;
                            console.log(`Successfully Transfered ${transferAmount.TransferAmount} to ${bankAcc.BankAcc}`);
                        }
                        else if (transferMethod.TransferMethod === 'Easy Paisa') {
                            let easyTransfer = await inquirer.prompt([{
                                    name: 'EasyTransfer',
                                    type: 'number',
                                    message: "Please Enter Easy Paisa Account Number"
                                }]);
                            Balance -= transferAmount.TransferAmount;
                            console.log(`Successfully Transfered ${transferAmount.TransferAmount} to ${easyTransfer.EasyTransfer}`);
                        }
                        else if (transferMethod.TransferMethod === 'Jazz Cash') {
                            let jazzTransfer = await inquirer.prompt([{
                                    name: 'JazzTransfer',
                                    type: 'number',
                                    message: 'Please Enter Jazz Cash Account Number'
                                }]);
                            Balance -= transferAmount.TransferAmount;
                            console.log(`Successfully Transfered ${transferAmount.TransferAmount} to ${jazzTransfer.JazzTransfer}`);
                        }
                    }
                }
            }
            else {
                condition = false;
            }
        }
    }
    else {
        console.log('Enter Correct PIN to use ATM');
    }
}
