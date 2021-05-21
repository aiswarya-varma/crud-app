const express = require('express');
const users = require('./controller/users');

const app = express();

app.use(express.static('../frontend/build'));

app.use('/', users);

app.listen(4000);
