const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"shorturls"
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql connected");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/api/create-short-url', (req, res) => {
    let uniqueId = Math.random().toString(36).substring(2, 7);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
