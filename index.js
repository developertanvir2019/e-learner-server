const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());
const courses = require('./courses.json');


app.get('/', (req, res) => {
    res.send(courses)
});
app.get('/courses', (req, res) => {
    res.send(courses)
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedId = courses.find(n => n.category_id === id);
    res.send(selectedId);
});
app.listen(port, () => {
    console.log('news is running ', port)
})
module.exports = app;
