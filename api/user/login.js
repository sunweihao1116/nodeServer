const express = require('express');
const { errRes } = require('../../utils/utils');
// 登录
module.exports = (db) => {
  const router = express.Router();
  router.post('/', (req, res) => {
    const body = req.body;
    console.log('------------->req', body);
    const sql = `SELECT * FROM t_user WHERE user_name = '${body.user_name}'`;
    db.query(sql, (err, data) => {
      if (err) {
        errRes(res, 'sql error');
      } else {
        if (data.length > 0) {
          if (data[0].password == req.body.password) {
            res.send({ error: 0, message: '登录成功', token: '', token: 'sadsadawq1231231token' });
          } else {
            errRes(res, '用户名或密码有误');
          }
        } else {
          errRes(res, '用户名不存在');
        }
      }
    });
  });
  return router;
};