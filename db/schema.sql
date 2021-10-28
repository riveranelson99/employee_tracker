-- Create table
-- Table keys: id (INT), first_name (VARCHAR), last_name(VARCHAR), title(Text), department(Text), salary(INT), manager(VARCHAR)

-- Sales:
-- row 1: 1, John, Doe, Sales Lead, Sales, 100000, null
-- row 2: 2, Mike, Chan, Salesperson, Sales, 80000, John Doe

-- Engineering:
-- row 3: 3, Ashley, Rodriguez, Lead Engineer, Engineering, 150000, null
-- row 4: 4, Kevin, Tupik, Software Engineer, Engineering, 120000, Ashely Rodriguez

-- Finance:
-- row 5: 5, Kunal, Singh, Account Manager, Finance, 160000, null
-- row 6: 6, Malia, Brown, Accountant, Finance, 125000, Kunal Singh

-- Legal:
-- row 7: 7, Sarah, Lourd, Legal Team Lead, Legal, 250000, null
-- row 8: 8, Tom, Allen, Lawyer, Legal, 190000, Sarah Lourd

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);