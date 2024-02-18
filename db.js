const mysql = require('mysql');
const express = require('express')

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  database: 'ecommerce_db',
  user: 'root',
  password: 'admin',
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/products',(req,res)=>{
    db.query('SELECT* from products',(err,rows)=>{
      try {
        return res.json(row)
      } catch (error) {
        console.log(err)
      }
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
