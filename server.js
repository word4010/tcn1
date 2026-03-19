const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.static('.')); // index.html та news.json

app.get('/news.json', (req, res) => {
    fs.readFile('news.json', 'utf-8', (err, data) => {
        if (err) return res.json([]);
        res.send(data);
    });
});

app.post('/saveNews', (req, res) => {
    fs.writeFile('news.json', JSON.stringify(req.body, null, 2), err => {
        if (err) return res.status(500).send('Error saving news');
        res.send('OK');
    });
});

app.listen(3000, () => console.log('Сервер працює на http://localhost:3000'));