DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(20, 2) NOT NULL,
  department_id INT(20) NOT NULL
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(20) NOT NULL,
  manager_id INT(20) NOT NULL
);
