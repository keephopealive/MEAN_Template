var db = require('mysql');
connection = db.createConnection({

  host: "localhost",
  port : 8889,
  user: "root",
  password: "root",
  database: "projectSchema",
  multipleStatements: true
  
});