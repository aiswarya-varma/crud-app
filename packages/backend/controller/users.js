const express = require('express');
const db = require('../config/db.config');
const router = express.Router();

router.get('/users', (req, res) => {
    var q = req.query.sqlquery.replace(/^\'|\'$/g, '');
    db.executeQuery(q)
        .then(result => {
            console.log(result);
            res.send(result)
        })
        .catch(err => res.send(err))
});
  
module.exports = router;
