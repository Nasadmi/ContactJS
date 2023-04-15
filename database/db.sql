CREATE DATABASE `contacts`;

USE `contacts`;

CREATE TABLE `tbl_users`
(
    id int primary key not null,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(500) not null
)

GO;