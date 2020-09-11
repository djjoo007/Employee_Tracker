const mysql = require('mysql');
const inquirer = require('inquirer');

// Connection information for SQL Database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_trackerDB'
});

// Connect to mySQL Server and SQL database
db.connect ((err) => {
    if (err) {
        throw err;
    }
    start();
});

// Function which prompts the user to choose an action
function start() {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            messages: 'What would you like to do?',
            choices: [
                'Add Department',
                'Add Role',
                'Add Employee',
                'View Department',
                'View Role',
                'View Employee',
                'Update Employee Role',
                'Exit'
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'View Department':
                    viewDepartment();
                    break;
                case 'View Role':
                    viewRole();
                    break;
                case 'View Employee':
                    viewEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    db.end();
                    break;
            }
        });
}

function addDepartment() {
    inquirer
        .prompt ({
            name: 'name',
            type: 'input',
            message: 'Please type the Department Name that is being added.'
        })
        .then(function(answer) {

        })
}

function addRole() {
    inquirer
        .prompt ({
            name: 'role',
            type: 'input',
            message: 'Please type the Role Name that is being added.'
        })
        .then (function(answer) {
            
        })
}