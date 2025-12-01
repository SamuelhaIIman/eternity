let mysql = require('mysql2');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "eternity"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

con.connect(function(err) {
    let sql = "SELECT * FROM eternity";
    if (err) throw err;
    con.query(sql, function(err, result, fields) {
    if (err) throw err;
        console.log(result);
    }); 
});