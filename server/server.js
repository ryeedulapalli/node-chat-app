const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();

//static middleware to serve up public folder
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});