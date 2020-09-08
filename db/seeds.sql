DROP DATABASE IF EXISTS company;

CREATE DATABASE company;

USE company;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(30) NOT NULL

);

INSERT INTO department (department)
VALUES ("Sales");

INSERT INTO department (department)
VALUES ("Finance");

INSERT INTO department (department)
VALUES ("Engineering");

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(45) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL
);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Rep I", 50000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Finance Associate", 65000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Finance Director", 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Developer I", 75000, 3);


CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Jones", 2, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kim", "Hanson", 3);