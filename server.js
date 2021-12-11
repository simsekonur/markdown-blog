const express = require('express');
const app = express();

const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

// the main endpoint when the program runs
app.get('/', (req, res) => {
    res.render('index');
})

// this will specify the port that
// you are going to listen 
// localhost:3000
app.listen(3000);