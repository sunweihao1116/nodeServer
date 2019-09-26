
const redis = require('redis');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

module.exports = _global = (app) => {
  // redis服务全局启用
  global._client = redis.createClient(6379, '127.0.0.1');
  _client.on('error', (err) => {
    console.log('Error ' + err);
  });
  
  // 全局接口log
  global._log = (req, logVal = '') => {
    console.log(`${req.method}--------->${req.baseUrl}`, logVal);
  };

  // body-parser 接收body数据
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());

  // seesion
  app.use(cookieSession({
    name: 'token',
    keys: [''],
    maxAge: 1000 * 60 * 60 * 12,
  }));
}