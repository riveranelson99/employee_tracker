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

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS role;
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);