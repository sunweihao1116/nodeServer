###node + mysql

##npm i express mysql

## 初始化服务

## 建库建表 * 命令行后加分号断句
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