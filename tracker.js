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
            message: 'Please enter the Department Name that is being added.'
        })
        .then(function(answer) {
            db.query('INSERT INTO department ?')
        })
}

function addRole() {
    inquirer
        .prompt ({
            name: 'title',
            type: 'input',
            message: 'Please enter the Employee Title.'
        }, 
        {
            name: 'salary',
            type: 'input',
            message: 'Please enter the Employee Salary.'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Please enter the Employee Department ID.'
        })
        .then (function(answer) {
            
        })
}

function addEmployee() {
    inquirer
        .prompt ({
            name: 'first_name',
            type: 'input',
            message: 'Please enter the First Name of Employee.'
        }, 
        {
            name: 'last_name',
            type: 'input',
            message: 'Please enter the Last Name of Employee.'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Please enter the Role ID of Employee.'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Please enter the Manager ID of Employee.'
        })
        .then (function(answer) {
            
        })
}

function viewDepartment() {
    db.query('Select * FROM department', function(err, res) {
        if (err) throw err;
    });
}

function viewRole() {


}

function viewEmployee() {


}

function updateEmployeeRole() {


    
}