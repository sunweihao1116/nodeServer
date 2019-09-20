const express = require('express');
const app = express();
const mysql = require('mysql');

require('./utils/global')(app); // 全局方法

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
const feature = '/api/v1';
// user
app.use(`${feature}/user`, require('./api/user/user')(db));
app.use(`${feature}/login`, require('./api/user/login')(db));
// product
app.use(`${feature}/list`, require('./api/product/list')(db));

app.listen(3000);