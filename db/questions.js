const db = require('../config');

function GetDepartmentNames(){
    db.query('select name from department', (err, data) => {
        const departmentNames = data.map(department => department.name);
        return departmentNames;
    })
}
function GetRoleNames(){
    db.query('select title from role', (err, data) => {
        const roleNames = data.map(role => role.title);
        return roleNames;
    })
}
function GetEmployeeNames(){
    db.query("select concat(first_name,' ',last_name) as name from employee", (err, data) => {
        const employeeNames = data.map(employee => employee.name);
        return employeeNames;
    })
}

const questions = {
    choices: [
        {
            type: 'list',
            name: 'continue',
            message: 'What would you like to do?',
            options: ['View all departments','Add a department','View all roles'
                ,'Add a Role','View all employees','Add an employee','Update an employee role','QUIT']
        }
    ],
    addDepartment : [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?'
        }
    ],
    addRole : [
        {
            type: 'input',
            name: 'title',
            mesage: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'list',
            name: 'department',
            message: 'What department is the new role a part of?',
            options: GetDepartmentNames()
        }
    ],
    addEmployee : [
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the first name of the employee'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name of the employee'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role is the employee?',
            options: GetRoleNames()
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Who is their manager?',
            options: GetEmployeeNames()
        }
    ],
    updateEmployeeRole : [
        {
            type: 'list',
            name: 'employee',
            message: 'Select an employee to update',
            options: GetEmployeeNames()
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select an new role for the employee',
            options: GetEmployeeNames()
        }
    ]
}

module.exports = questions;