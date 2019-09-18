const express = require('express');
const { errRes } = require('../../utils/utils');

module.exports = (db) => {
  const router = express.Router();
  router.get('/', (req, res) => {
		// console.log('req.session', req);
		if (!req.session.id) { 
			errRes(res, '未登录', 401);
			return;
		}
    const sql = `SELECT * FROM t_user WHERE id = '${req.session['id']}' `;
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
	})
	return router;
};