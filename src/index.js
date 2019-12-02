const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
  res.json({});
});


app.listen(3000,function(){
console.log("Listening on port: 3000")
})