const express = require('express');
const app = express();
const mysql = require('mysql');


// 连接本地数据库
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'swh1116',
  database : 'localhost',
});

db.connect();


app.listen(3000);