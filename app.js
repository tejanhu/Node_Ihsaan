var env = require('dotenv').config();
var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,  
    database : process.env.DB_DATABASE,  
    password : process.env.MYSQL_PW  
  });

//SELECT DATA
// var qry = 'SELECT COUNT(*) AS total FROM users';

// connection.query(qry, function(error, res, fields){
//     if(error) throw error;
//     console.log(res[0].total);
// });

//INSERT DATA
// var qry = 'INSERT INTO users (email) VALUES("tyler_the_mouse@yahoo.com")';

// connection.query(qry, function(error, res, fields){
//     if(error) throw error;
//     console.log(res);
// }); 


//INSERT DATA II
// var person = {email: faker.internet.email(),
//               created_at: faker.date.past()
// };

// var end_res = connection.query('INSERT INTO users SET ?', person, function(error, res){
//     if(error) throw error;
//     console.log(res);
// });


// INSERT LOADS OF DATA ===============================

var data =[];
for(var i =0; i<500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, res){
    console.log(err);
    console.log(res);
})

connection.end();