-- Write SQL queries this file that do the following:
-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burgers_db;
-- Create a burgers table with these fields:
CREATE TABLE burgers 
-- id: an auto incrementing int that serves 
(
-- as the primary key.
id int NOT NULL AUTO_INCREMENT,
-- burger_name: a string.
burger_name VARCHAR(255) NOT NULL,
-- devoured: a boolean.
devoured BOOLEAN NOT NULL DEFAULT 0,
-- date: a TIMESTAMP.
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- update the timestamp
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id)
);