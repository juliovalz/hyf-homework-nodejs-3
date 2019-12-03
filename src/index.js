const express = require('express');
const app = express();
var bodyParser = require('body-parser');
//const db = require('src/db');
//const User = db.User;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var user=[]
var x = 1;

app.get('/users', function(req,res){	 	
	res.json(
 	 	 user
	)
	 
})

app.post('/user', function (req, res) {
	var user_id = req.body.id;
	user.push( { id : 0 } )
    res.send({"id":user_id});
});



app.get('/user/:id',function(req,res){
	res.send({"id": parseInt(req.params.id)})
})



app.get('/users', function(req,res){
 	res.json(
 	 user
)
})

app.delete('/user/:id', function(req,res){
	if(user == ""){	
		res.status(204).send()
	}else{
	user = [];
	res.status(202).send();
	}
    
})



app.listen(3000,function(){
console.log("Listening on port: 3000")
})