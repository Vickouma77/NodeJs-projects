const express = require('express');
const mysql = require('mysql');

require('dotenv').config();


const app = express();

const pass_word = process.env.MYSQL_PASSWORD;

app.use(express.static('public'));

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: pass_word,
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
    let sql = `INSERT INTO urls (url, unique_id) VALUES ('${req.query.url}', '${uniqueId}')`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({
            "status": "success",
            "short_url": `http://localhost:5000/${uniqueId}`
        })
    })
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
