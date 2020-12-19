const express = require('express');
const ejs = require('ejs');

let app = express();

app.set('view engine', 'ejs');
app.use('/media', express.static(__dirname + '/media'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Running on port 3000.");
    }
});