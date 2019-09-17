const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

// body-parser 接收body数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 连接本地数据库
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'swh1116',
  database : 'localhost',
});
db.connect();

// res.query  //处理get请求；
// res.body   //处理post请求
// req.params //处理get和post请求，但是查找的优先级为：params->body->query
const feature = '/api';
app.use(`${feature}/user`, require('./api/user/user')(db));
app.use(`${feature}/login`, require('./api/user/login')(db));

app.listen(3000);