import mysql from 'mysql2'

// create the connection to database
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'orcamento',
    password: 'root'
  });

export default con
