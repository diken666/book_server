--创建用户表 user
CREATE TABLE `bookshare`.`user` (
  `uid` VARCHAR(40) NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  `phone` VARCHAR(40) NULL,
  `token` VARCHAR(100) NULL,
  `update_time` VARCHAR(50) NULL,
  PRIMARY KEY (`uid`));

