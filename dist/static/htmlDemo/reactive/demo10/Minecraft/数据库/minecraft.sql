# Host: localhost  (Version: 5.5.53)
# Date: 2018-11-27 12:02:04
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `userpass` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1399043179@qq.com','wangjun043179'),('hukaikai@666.com','hukaikai666');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
