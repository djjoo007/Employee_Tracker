-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS employee_trackerDB;

-- Created the DB "employee-trackerDB" (only works on local connections)
CREATE DATABASE employee_trackerDB;

-- Use the DB "employee-trackerDB" for all the rest of the script
USE employee_trackerDB;

-- Create Table for "department"
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(30) NOT NULL
);

-- Create Table for "role"
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(20, 2) NOT NULL,
  department_id INT
);

-- Create Table for "employee"
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT NOT NULL
);
