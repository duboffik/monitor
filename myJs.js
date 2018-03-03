// get the client
   const mysql = require('mysql2');
var i, myTable, myTr, myTd;

console.log('start');
myTable= document.createElement('table');

 // create the connection to database
 const connection = mysql.createConnection({
     host: '192.168.1.236',
     user: 'root',
     password: '12345',
     database: 'twitter01'
 });

for (var i=0; i<2; i++) {
    myTr = document.createElement('tr');
    myTd = document.createElement('td');
    myTd.innerHTML = 'hhh';
    myTr.appendChild(myTd);
    myTable.appendChild(myTr);
}
/*
 //var options = {sql: 'select A,B,C,D from foo', rowsAsArray: true}
 connection.execute(
     'SELECT * FROM `news` WHERE `likes` > 20',
     function(err, results, fields) {
         for (var i=0; i<results.length; i++) {
             myTr = document.createElement('tr');
             myTd = document.createElement('td');
             myTd.innerHTML = results[i];
             myTr.appendChild(myTd);
             myTable.appendChild(myTr);
         }
         //console.log(results[0]); // results contains rows returned by server
         //console.log(fields); // fields contains extra meta data about results, if available
     }
 );
*/
document.body.appendChild(myTable);
