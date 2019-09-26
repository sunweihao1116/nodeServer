

const redisSet = (key, value, seconds) => {
  seconds = seconds || 10; // 默认10s 用于测试
  _client.set(key, value);
  _client.expire(key, seconds); // 设置过期时间 
}

const redisGet = async (key) => {
  return new Promise((reslove, reject) => {
    _client.get(key, (err, val) => { // 异步
      console.log('getRedisValue----->', val);
      reslove(val);
    });
  });
};

module.exports = {
  redisSet,
  redisGet,
}