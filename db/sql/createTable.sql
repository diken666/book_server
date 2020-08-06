--创建用户表 user
CREATE TABLE `bookshare`.`user` (
  `uid` VARCHAR(40) NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  `phone` VARCHAR(40) NULL,
  PRIMARY KEY (`uid`));

-- 创建用户登录状态表 user_status
CREATE TABLE `bookshare`.`user_status` (
  `uid` VARCHAR(40) NOT NULL,
  `token` VARCHAR(100) NOT NULL,
  `update_time` VARCHAR(50) NULL,
  PRIMARY KEY (`uid`));
