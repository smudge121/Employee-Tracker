const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./config');
const questions = require('./db/questions');
const Queries = require('./db/index');
const cTable = require('console.table');


function Choices(){
    inquirer.prompt(questions.choices).then((answer) => {
        switch(answer.continue) {
            case 'View all departments':
                Queries.GetAllDepartments().then((data) => console.table(data));
                break;
            case 'Add a department':
                AddDepartment();
                break;
            case 'View all roles':
            case 'Add a Role':
            case 'View all employees':
            case 'Add an employee':
            case 'Update an employee role':
            case 'QUIT':
                break;
        }
    })
}

function AddDepartment() {
    inquirer.prompt(questions.addDepartment).then((answer) => {
        
    })
}

Choices();