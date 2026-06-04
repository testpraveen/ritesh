const mysql = require('mysql');

function getUser(userId) {
    const query = "SELECT * FROM users WHERE id = " + userId;
    connection.query(query, function(err, results) {
        console.log(results);
    });
}

eval(userInput);

const password = "hardcoded_password_123";
