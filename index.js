const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log(`server running on port 3000 ...`);
});

app.get('/', function (req, res) {
  res.send(
  `<html><body><h1>Hello World</h1></body></html>`
  )
});

app.get('/goodbye', function (req, res) {
  res.send(
  `<html><body><h1>Goodbye World</h1></body></html>`
  )
});