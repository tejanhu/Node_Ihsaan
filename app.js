const express = require('express')

const app = express();

app.get('/', function(req, res){
    res.send("Hello World!")
})

testData = [
    {"id":001, "name": "Ahmed", "age":32, "maritial_status":"Single"},
    {"id":002, "name": "Abdullah", "age":35, "maritial_status":"Single"},
    {"id":003, "name": "Mansour", "age":27, "maritial_status":"Single"},
    {"id":004, "name": "Mudatthir", "age":58, "maritial_status":"Single"}
]

app.get("/data", function(req,res){
  
    res.send(testData)
})

app.get('/data/:id', function(req,res){
    const id = req.params.id
    if(id==001){
        res.send('Hello Ahmed ')
    } 
    else if(id==002){
        res.send('Hello Abdullah ')
    }
    else if(id==003){
        res.send('Hello Mansour ')
    }
    else {
        res.send('Hello Mudatthir ')
    }
})

app.listen(9000, function(req,res){
    console.log('Currently running....')
});