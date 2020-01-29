DROP DATABASE IF EXISTS hamburger_db;
CREATE DATABASE hamburger_db;
USE hamburger_db;

CREATE TABLE hamburgers (
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    isEaten BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO hamburgers (name) VALUES ("Veggie Burger");

SELECT * FROM hamburgers