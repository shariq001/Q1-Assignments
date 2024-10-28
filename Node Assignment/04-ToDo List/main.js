import inquirer from "inquirer";
let condition = true;
let todos = [];
console.log('Hello and Welcome to Command Line ToDo by Muhammad Shariq!');
let userChoice = await inquirer.prompt([{
        name: "UserChoice",
        type: 'list',
        choices: ['Yes', 'No'],
        message: 'Do you want to use the ToDo List?'
    }]);
while (condition) {
    if (userChoice.UserChoice === 'Yes') {
        let operations = await inquirer.prompt([{
                name: 'Operations',
                type: 'list',
                choices: ['Add', 'Update', 'View', 'Delete', 'Exit'],
                message: 'Please Select an Operation Below'
            }]);
        if (operations.Operations === 'Add') {
            let addTask = await inquirer.prompt([{
                    name: 'AddTask',
                    type: 'input',
                    message: 'Enter a ToDo you want to Add in the List'
                }]);
            todos.push(addTask.AddTask);
            console.log(todos);
        }
        else if (operations.Operations === 'Update') {
            console.log(todos);
            let todoNum = await inquirer.prompt([{
                    name: 'TodoNum',
                    type: 'number',
                    message: 'Please Enter Todo Number to Update'
                }]);
            let updateTodo = todoNum.TodoNum - 1;
            let newTodo = await inquirer.prompt([{
                    name: 'NewTodo',
                    type: 'input',
                    message: 'Please Enter a new Todo'
                }]);
            todos.splice(updateTodo, updateTodo, newTodo.NewTodo);
            console.log(todos);
        }
        else if (operations.Operations === 'View') {
            console.log(todos);
        }
        else if (operations.Operations === 'Delete') {
            console.log(todos);
            let todoNum = await inquirer.prompt([{
                    name: 'TodoNum',
                    type: 'number',
                    message: 'Please Enter Todo Number to Delete'
                }]);
            let deleteTodo = todoNum.TodoNum - 1;
            todos.splice(deleteTodo, deleteTodo);
            console.log(todos);
        }
        else if (operations.Operations === 'Exit') {
            condition = false;
        }
    }
    else {
        condition = false;
    }
}
