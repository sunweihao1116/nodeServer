const express = require('express');

module.exports = (db) => {
  const router = express.Router();
  router.get('/', (req, res) => {
    console.log(req.params);
    const query = req.query;
    const sql = `SELECT * FROM t_user WHERE id = '${query.id}' `;
		db.query(sql, (err, data) => {
			if (!err) {
				if (data.length == 0) {
					res.send({ error : 1 });
				} else {
          console.log(data);
					res.send(data[0]);
				}
			} else {
				res.send({ error: 1 });
			}
		})
	})
	return router;
};