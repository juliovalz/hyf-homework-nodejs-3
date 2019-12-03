const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const user=[]



app.get('/users', function(req,res){
 	res.json(
 	 user
)
})



app.listen(3000,function(){
console.log("Listening on port: 3000")
})