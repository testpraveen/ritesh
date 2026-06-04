const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    const query = url.parse(req.url, true).query;
    
    // SQL Injection - CodeQL will flag this
    const userInput = query.id;
    const sqlQuery = "SELECT * FROM users WHERE id = " + userInput;
    
    // XSS - CodeQL will flag this
    res.write("<html><body>" + query.name + "</body></html>");
    
    // Code Injection - CodeQL will flag this
    eval(query.code);
    
    // Path Traversal - CodeQL will flag this
    fs.readFile("/var/www/" + query.file, function(err, data) {
        res.end(data);
    });

}).listen(8080);
