const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const CourseDetails = require('./data/CourseDetails.json');

app.get('/', (req, res) => {
    res.send('Programming Languages Server is Running');
});

app.get('/course', (req, res) => {
    res.send(CourseDetails)
});



app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = CourseDetails.find(n => n.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Programming Languages Server is running at port:', port);
})

module.exports = app;