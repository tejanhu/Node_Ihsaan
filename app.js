var fs = require('fs')

fs.appendFile('calc.js','\nconsole.log("just appended this to the file")', function(err){
    console.log("File appended!")
})