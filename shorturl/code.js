const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
