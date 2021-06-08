const express = require('express');
const db = require('../config/db.config');
const router = express.Router();

router.get('/editor', (req, res) => {
    var q = (req.query.sqlquery || '').replace(/^\'|\'$/g, '');

    q.length > 0 && db.executeQuery(q, req.query.dbms)
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => res.send(err));
});

router.post('/connection', (req, res) => {
    if (req.query.dbms === 'PostgreSQL') {
        db.connectToPostgresDB().then(result => {
            console.log("Connected!");
            res.send({ redirectTo: `/editor?dbms=${req.query.dbms}` });
        })
            .catch(err => { throw err });
    } else if (req.query.dbms === 'MySQL') {
        var credentials = {
            user: req.query.username,
            password: req.query.password,
        }
        db.connectToMySQLDB(credentials)
            .then(result => {
                console.log("Connected!");
                res.send({ redirectTo: `/editor?dbms=${req.query.dbms}` });
            })
            .catch(err => { throw err });
    }
});

router.post('/logout', (req, res) =>
    db.handleLogout(req.query.dbms)
        .then(res.send({ redirectTo: '/connection' })));

module.exports = router;
