/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE users;
CREATE DATABASE users;

 USE users;

 CREATE TABLE users(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(50),
   email VARCHAR(50),
   password VARCHAR(50),
   line1 VARCHAR(50),
   line2 VARCHAR(50),
   city VARCHAR(50),
   state VARCHAR(20),
   zipcode INT(20),
   phoneNum INT(10),
   cardNum INT(20),
   expiry VARCHAR(10),
   cvv INT(5),
   cardZipcode INT(10)
 );

--  INSERT INTO groceries(name, quantity, purchased) VALUES ('Chocolates', 2, 1);
