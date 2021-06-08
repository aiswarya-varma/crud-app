const mysql = require('mysql');
const pgp = require('pg-promise')(/* options */);

const seq = {

    /**Declaration of databases for my development environment**/
    "development": {
        "databases": {
            "Database1": {
                "database": process.env.RDS_DATABASE1, //you should always save these values in environment variables
                "username": process.env.RDS_USERNAME1,  //only for testing purposes you can also define the values here
                "password": process.env.RDS_PASSWORD1,
                "host": process.env.RDS_HOSTNAME1,
                "port": process.env.RDS_PORT1,
                "dialect": "postgres"  //here you need to define the dialect of your databse, in my case it is Postgres
            },
            "Database2": {
                "database": process.env.RDS_DATABASE2,
                "username": process.env.RDS_USERNAME2,
                "password": process.env.RDS_PASSWORD2,
                "host": process.env.RDS_HOSTNAME2,
                "port": process.env.RDS_PORT2,
                "dialect": "mssql"  //second database can have a different dialect
            },
        },
    }
}

let con;

const connectToPostgresDB = () => {
    con = pgp('postgres://postgres:postgres123@localhost:5432/testdb');

    return con.connect();
}

const connectToMySQLDB = credentials => {
    con = mysql.createConnection({
        host: 'localhost',
        user: credentials.user,
        password: credentials.password,
        database: 'testdb'
    });
    return new Promise((resolve, reject) =>
        con.connect((err) =>
            err ? reject(err) : resolve("success!")
        )
    )
}

const executeQuery = (qry, dbms) =>
    dbms === 'PostgreSQL' ?
        con.query(qry) :
        new Promise((resolve, reject) =>
            con.query(qry, (err, rows) =>
                err ? reject(err) : resolve(rows)
            )
        );


const handleLogout = dbms => Promise.resolve("logged out");
// dbms === 'PostgreSQL' ?
//     con.query(qry) :
//     new Promise((resolve, reject) =>
//         con.query(qry, (err, rows) =>
//             err ? reject(err) : resolve(rows)
//         )
//     );

exports.executeQuery = executeQuery;
exports.connectToMySQLDB = connectToMySQLDB;
exports.connectToPostgresDB = connectToPostgresDB;
exports.handleLogout = handleLogout;