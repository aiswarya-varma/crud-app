const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'aiswarya',
    password: 'AVQBurst8*',
    database: 'testdb'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

const executeQuery = qry => {
    console.log(qry);
    return new Promise((resolve, reject) => 
        con.query(qry, (err, rows) => 
            err ? reject(err) : resolve(rows)
        )
    )
} 

module.exports.executeQuery = executeQuery;
