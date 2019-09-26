const express = require('express');
const { errRes, createCookie } = require('../../utils/utils');
const { redisSet } = require('../../utils/redis');
const base64 = require('../../utils/base64');

// 登录
module.exports = (db) => {
  const router = express.Router();
  router.post('/', (req, res) => {
    const body = req.body;
    _log(req, req.body);
    const sql = `SELECT * FROM t_user WHERE user_name = '${body.user_name}'`;
    db.query(sql, (err, data) => {
      if (err) {
        errRes(res, 'sql error');
      } else {
        if (data.length > 0) {
          if (data[0].password == req.body.password) {
            const time = new Date().getTime();
            const token = `${base64.encode(JSON.stringify(data[0]))}.${base64.encode(time.toString())}`;
            // createCookie(req, data); // 向客户端存cookie
            redisSet(data[0].u_id, token, 60 * 60) // redis存储 1小时
            res.send({ error: 0, message: '登录成功', token, });
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