const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'ecommerce_db',
  user: 'root',
  password: 'admin',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});