const mysql = require('mysql');
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