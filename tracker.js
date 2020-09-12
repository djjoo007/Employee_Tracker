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
            db.query('INSERT INTO department SET ?', 
            {
                name: answer.name
            },
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' Department inserted!');
                start();
            })
        });
}

function addRole() {
    inquirer
    .prompt ([{
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
    }])
        .then (function(answer) {
            db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', 
            [
                answer.title,
                answer.salary,
                answer.department_id
            ],
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' Role inserted!');
                start();
            })
        })
}

function addEmployee() {
    inquirer
        .prompt ([{
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
        }])
        .then (function(answer) {
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', 
            [
                answer.first_name,
                answer.last_name,
                answer.role_id,
                answer.manager_id
            ],
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' Employee inserted!');
                start();
            })            
        })
}

function viewDepartment() {
    db.query('SELECT * FROM department;', function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log('department_id: ' + res[i].id + ' department_name: ' + res[i].name);
        }
        start();
    });
}

function viewRole() {
    db.query('SELECT * FROM role;', function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log('Role ID: ' + res[i].id + ' title: ' + res[i].title + ' salary: ' + res[i].salary + ' department_id: ' + res[i].department_id);
        }
        start();
    });

}

function viewEmployee() {
    db.query('SELECT * FROM employee;', function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log('Employee ID: ' + res[i].id + ' first_name: ' + res[i].first_name + ' last_name: ' + res[i].last_name + ' role_id: ' + res[i].role_id + ' manager_id: ' + res[i].manager_id);
        }
        start();
    });
}

function updateEmployeeRole() {
    inquirer
        .prompt([{
            name: 'employee',
            type: 'input',
            message: 'Please enter the Employee First Name.'            
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Please enter new Role ID for Employee.'
        }]). then (function(answer) {
            db.query('UPDATE employee SET role_id=? WHERE employee.first_name=?', 
            [
                answer.role_id,
                answer.employee
            ],
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' Employee updated!');
                start();
            })            
        })
    
    
}