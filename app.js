var env = require('dotenv').config();
var faker = require('faker');
var mysql = require('mysql');


// console.log(faker.internet.email());

// console.log(faker.date.past());

function generateAddress(){
    console.log(faker.address.streetAddress())
    console.log(faker.address.city())
    console.log(faker.address.state())
}


generateAddress();

generateAddress();

generateAddress();

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,  
    database : process.env.DB_DATABASE,  
    password : process.env.MYSQL_PW  
  });

var qry = 'SELECT CURDATE() AS date, CURTIME() AS time, NOW() AS now';

connection.query(qry, function(error, res, fields){
    if(error) throw error;
    console.log(res[0].date.toString());
    console.log(res[0].time.toString());
    console.log(res[0].now.toString());
});

connection.end();