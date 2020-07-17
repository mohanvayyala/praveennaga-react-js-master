var express=require("express");
var path = require("path");


var app= express();
var server= require("http").Server(app);
var cors = require("cors");
app.use(cors());
require('./routes')(app);

app.get('/info',(req,res)=>{
 res.send(" App is up and running....")
});

server.listen(process.env.PORT || 9000);