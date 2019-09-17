const express = require('express');
const { errRes } = require('../../utils/utils');

module.exports = (db) => {
  const router = express.Router();
  router.get('/', (req, res) => {
    const query = req.query;
    const sql = `SELECT * FROM t_user WHERE id = '${query.id}' `;
		db.query(sql, (err, data) => {
			if (!err) {
				if (data.length == 0) {
          errRes(res, '未查到用户信息');
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