const express = require('express')

const app = express();

app.get('/', function(req, res){
    res.send("Hello World!")
})


app.listen(9000, function(req,res){
    console.log('Currently running....')
});