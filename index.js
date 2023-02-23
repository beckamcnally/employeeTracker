const inquirer = require("inquirer")
const {viewDepartments, addDepartment, updateDepartment, deleteDepartment } = require('./helpers/departmentHelper')
const {addEmployee, updateEmployee, deleteEmployee, viewUnsortedEmp, viewEmpByDept, viewEmpByMgr, viewAggregateOfSalaries} = require('./helpers/employeeHelpers')
const {viewRoles, addRole, updateRole, deleteRole} = require('./helpers/roleHelpers')
const db = require('./connection/config')

questions()
function questions() {
  inquirer
    .prompt([
      {
        type:'list',
        message: 'What would you like to do?',
        name: 'choices',
        choices:[
          'view all departments', 
          'view all roles', 
          'view all employees',
          'add a department', 
          'add a role', 
          'add an employee', 
          'update an employee',
          'update a department',
          'update a role',
          'delete an employee',
          'delete a department',
          'delete a role'
        ]

      }
    ])
    .then((answers) => {
      console.log(answers.choices)
      switch (answers.choices) {
        case 'view all departments': 
           viewDepartments();
          break;
        case 'view all roles': 
           viewRoles();
          break;
        case 'view all employees': 
           employeeQuestions();
          break;
        case 'add a department': 
           addDepartment();
          break;
        case 'add a role': 
           addRole();
          break;
        case 'add an employee': 
           addEmployee();
          break;
        case 'update an employee': 
           updateEmployee();
          break;
        case 'update a department': 
           updateDepartment();
          break;
        case 'update a role': 
           updateRole();
          break;
        case 'delete an employee': 
           deleteEmployee();
          break;
        case 'delete a department': 
           deleteDepartment();
          break;
        case 'delete a role': 
           deleteRole();
          break;
      }
    })
    .catch((err) => {
      console.log(err)
    })
}


function employeeQuestions() {
  inquirer
    .prompt([
      {
        type:'list',
        message: 'What would you like view?',
        name: 'choices',
        choices:[
          'All employees unsorted', 
          'Employees sorted by department', 
          'Employees sorted by manager', 
          'an aggregate of all employee salaries', 
          ]
      }
    ])
    .then((answers) => {
      console.log(answers.choices)
      switch (answers.choices) {
        case 'All employees unsorted': 
           viewUnsortedEmp();
          break;
        case 'Employees sorted by department': 
           viewEmpByDept();
          break;
        case 'Employees sorted by manager': 
           viewEmpByMgr();
          break;
        case 'an aggregate of all employee salaries': 
           viewAggregateOfSalaries();
          break;
      }
    })
    .catch((err) => {
      console.log(err)
    })
}






