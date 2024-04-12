const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "app-web_nodejs",
  user: "root",
  password: "",
});

module.exports = pool.promise();