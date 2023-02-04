const inquirer = require("inquirer")


function questons() {
  inquirer
    .createPromptModule([
      {
        type:'list',
        message: 'What would you like to do?',
        name: 'choices',
        ['view all departments', 'view all roles', 'view all employees','add a department', 'add a role', 'add an employee', 'update an employee role']

      }
    ])
}