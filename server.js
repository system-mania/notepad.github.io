const express = require('express');
const app = express();

app.use(express.static('.'));

app.listen(3000, function () {});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
