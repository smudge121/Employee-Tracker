const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./config');
const questions = require('./db/questions');




db.query('select * from department', (err, data) => {
    // console.log(data);
    // console.log(process.env.DB_USER);
    return data;
})


function Choices(){
    inquirer.prompt(questions.choices).then((answer) => {
        switch(answer.continue) {
            case 'View all departments':
            case 'Add a department':
            case 'View all roles':
            case 'Add a Role':
            case 'View all employees':
            case 'Add an employee':
            case 'Update an employee role':
            case 'QUIT':
        }
    })
}