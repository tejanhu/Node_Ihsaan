var fs = require('fs')

// fs.writeFile('calc1.js','console.log("Created new file!")', function(err){
//     console.log("File created successfully!")
// })

// fs.readFile('calc1.js','utf-8', function(err,data){
//     console.log(data)
// })

// fs.appendFile('calc1.js','\nconsole.log("Appended file successfully!")', function(err){
//     console.log("File appended successfully!")
// })

fs.unlink("calc1.js",function(error){
    console.log("File no longer exists")
})