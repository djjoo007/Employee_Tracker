const mysql = require('mysql');
const inquirer = require('inquirer');

const { start } = require('repl');
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_trackerDB'
});

// connect to mySQL server and SQL database
db.connect ((err) => {
    if (err) {
        throw err;
    }

    start();
});

// function prompts the user to choose an action
function start() {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            messages: 'What would you like to do?',
            choices: [
                'Add Department',
                'Add Role',
                'Add Employees',
                'View Departments',
                'View Roles',
                'View Employees',
                'Update Roles',
                'Update Employees',
                'Exit'
            ]
        })
}