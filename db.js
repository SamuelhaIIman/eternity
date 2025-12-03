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

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   let sql = "DROP TABLE customers";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

con.connect(function(err) {
    let sql2 = "DESCRIBE eternity";
    let sql = "SELECT * FROM eternity";
    //let sql = "INSERT INTO eternity (PersonId, FirstName, LastName, City) Values (1, 'Samuel', 'Hallman', 'Lahti')";
    if (err) throw err;
    con.query(sql2, function(err, result, fields) {
    if (err) throw err;
        console.log(result);
    }); 
    con.query(sql, function(err, result, fields) {
    if (err) throw err;
        console.log(result);
    }); 
});
