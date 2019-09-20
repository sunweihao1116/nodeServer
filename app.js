const express = require('express');
const app = express();

require('./utils/global')(app); // 全局方法
require('./router')(app);

app.listen(3000);