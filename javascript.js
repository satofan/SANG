const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Handle form submission
const form = document.getElementById('userForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user data from form
  const name = document.getElementById('name').value;
  const department = document.getElementById('department').value;
  const rank = document.getElementById('rank').value;

  // Insert user data into database
  const sql = 'INSERT INTO users (name, department, rank) VALUES (?, ?, ?)';
  connection.query(sql, [name, department, rank], (err, result) => {
    if (err) throw err;
    console.log(`Inserted user with id ${result.insertId}`);
  });

  // Close popup
  const popup = document.getElementById('popup');
  popup.remove();
});