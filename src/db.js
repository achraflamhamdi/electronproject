let mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_biblio"
});

var c = con.connect(function(err) {
  if (err) throw err;
  
  console.log("Connected!");
  
});

module.exports = con;