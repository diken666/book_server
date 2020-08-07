-- 创建用户表 user
CREATE TABLE `bookshare`.`user` (
  `uid` VARCHAR(40) NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  `phone` VARCHAR(40) NULL,
  `token` VARCHAR(100) NULL,
  `update_time` VARCHAR(50) NULL,
  PRIMARY KEY (`uid`));

-- 创建圈子表 circle
CREATE TABLE `bookshare`.`circle` (
  `cid` VARCHAR(50) NOT NULL,
  `uid` VARCHAR(40) NOT NULL,
  `create_time` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cid`));

-- 创建圈子用户表 circle_user
CREATE TABLE `bookshare`.`circle_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `uid` VARCHAR(40) NOT NULL,
  `cid` VARCHAR(50) NOT NULL,
  `is_owner` INT NULL,
  `is_admin` INT NULL,
  `join_time` VARCHAR(50) NOT NULL,
  `update_time` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

