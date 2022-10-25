const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/Course.json');
const CourseDetails = require('./data/CourseDetails.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/course', (req, res) => {
    res.send(course)
});



app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = CourseDetails.find(n => n.cid === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})