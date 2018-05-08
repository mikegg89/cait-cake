var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cake_shop',
  password: '...'
});

module.exports={
  connection
}
