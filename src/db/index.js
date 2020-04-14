const mysql = require('mysql');
require('dotenv').config();

let con = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

let db = {

  table: process.env.DB_TABLE,

  query: function (str) {
    con.query(str, (err,rows) => {
      if(err) {
        console.log(err);
      }
      console.log(rows);
    });
  }

}

module.exports = db;