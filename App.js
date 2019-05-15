var express= require('express');
var path=require('path');
var http = require('http');
var app=express();
var url1= require('url');
var querystring=require('querystring');
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


app.listen(port,function(request,response){ 

	app.get('/',function(request,response){
		response.render(path.join(__dirname ,'/public','setup.html'));
		console.log('/');
	});
	

console.log("server started listen on port 3000");
}).listen(port);