const express = require('express');
const { errRes } = require('../../utils/utils');
const { redisGet } = require('../../utils/redis');
const base64 = require('../../utils/base64');

module.exports = (db) => {
  const router = express.Router();
  router.get('/', (req, res) => {
		_log(req);
		if (!req.headers.authorization) { 
			errRes(res, 'token is nil', 401);
			return;
		}
		const jwtInfo = JSON.parse(base64.decode(req.headers.authorization.split('.')[0]));
		redisGet(jwtInfo['u_id']).then(val => {
			if (!val || req.headers.authorization !== val) {
				errRes(res, 'token失效', 401);
				return;
			}
			const sql = `SELECT * FROM t_user WHERE u_id = '${jwtInfo['u_id']}' and status = '1'`;
			db.query(sql, (err, data) => {
				if (!err) {
					if (data.length == 0) {
						errRes(res, '未查到用户信息', 401);
					} else {
						res.send(data[0]);
					}
				} else {
					errRes(res, 'sql error');
				}
			})
		});
	})
	return router;
};