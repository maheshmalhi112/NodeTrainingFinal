const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pms"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = conn;