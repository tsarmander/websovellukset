const express = require('express');
const db = require('./database');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.send("test");
});

app.get('/db', db.getAll);
app.listen(PORT, HOST);
console.log("testi 1");