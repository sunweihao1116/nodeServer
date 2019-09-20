const express = require('express');
const { errRes } = require('../../utils/utils');

// 获取全部列表
module.exports = (db) => {
  const router = express.Router();
	// 全量商品
  router.get('/', (req, res) => {
		_log(req);
    const sql =`SELECT * FROM t_list`;
		db.query(sql, (err, data) => {
			if (!err) {
				if (data.length == 0) {
					res.send([]);
				} else {
					res.send(data);
				}
			} else {
        errRes(res, 'sql error');
			}
		})
  });
  // 单商品
  router.get('/:id', (req, res) => {
		_log(req, req.params.id);
    const sql = `SELECT * FROM t_list WHERE id = '${req.params.id}'`;
		db.query(sql, (err, data) => {
			if (!err) {
				if (data.length == 0) {
					res.send({});
				} else {
					res.send(data[0]);
				}
			} else {
        errRes(res, 'sql error');
			}
		})
  });
	return router;
};