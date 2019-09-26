### node + mysql

## npm i express mysql body-parser

## 初始化服务

## 建库建表 * 命令行后加分号断句
- sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables // 重启sql
- mysql -u root -p
- show databases;
- create database localhost; 创建数据库， drop database localhost; 删除数据库
- Use localhost; 使用数据库
- show tables; 查表
- create table t_user(
  id bigint(20) auto_increment primary key comment '主键',
  user_name varchar(20) DEFAULT NULL COMMENT '用户名',
  password varchar(64) NOT NULL COMMENT '密码',
  ...
) default charset=utf8;    创建表
- drop table t_user; 删除表
- ...
- mysql可视化工具 sequel Pro --- http://www.sequelpro.com/

## 接口开发
- 获取用户信息 /api/user                                     GET
- 登录 /api/login                                           POST
- 注册 数据库插入数据 /api/register                           POST
- 获取列表及单条数据  /api/list or /api/list/:id              GET

## npm i cookie-session
- 向客户端存数据

## redis 安装（Mac）
- 下载redis   https://redis.io/download
- 移动到 /usr/local/  command + shift + G跳转目录
- cd /usr/local/redis-x.x.x/
- sudo make test 编译测试
- sudo make install 编译下载
- 启动redis redis-server
- 测试redis redis-cli
- 安装redis 客户端 https://github.com/uglide/RedisDesktopManager/releases（免费需自己编译）


## node中使用redis
```
const redis = require('redis');
const client = redis.createClient(PROT, HOST);
client.on('error', (err) => { // 判断是否失败
  console.log('Error ' + err);
});
client.set(key, value);
client.get(key, (err, value)=> {});
client.expire(key, seconds) // 设置过期时间

```