var fs = require('fs')

fs.readFile('calc.js','utf-8', function(err, data){
    console.log(data)
})