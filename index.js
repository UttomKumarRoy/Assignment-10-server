const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/Course.json');
//const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/course', (req, res) => {
    res.send(course)
});



//app.get('/news/:id', (req, res) => {
//    const id = req.params.id;
//    const selectedNews = news.find(n => n._id === id);
//    res.send(selectedNews);
//});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})