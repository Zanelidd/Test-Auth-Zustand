-- Active: 1710688752503@@127.0.0.1@3306@authzustand
CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, email VARCHAR(100) NOT NULL UNIQUE, lastname VARCHAR(80) NOT NULL, firstname VARCHAR(80) NOT NULL, password_hash VARCHAR(100) NOT NULL
);

INSERT INTO
    user (
        id, email, lastname, firstname, password_hash
    )
VALUES (
        1, "toto@toto.com", "toto", "Toto", "blablabla"
    );
