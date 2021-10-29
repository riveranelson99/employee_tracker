INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 001),
       ("Salesperson", 80000, 001),
       ("Lead Engineer", 150000, 002),
       ("Software Engineer", 120000, 002),
       ("Account Manager", 160000, 003),
       ("Accountant", 125000, 003),
       ("Legal Team Lead", 250000, 004),
       ("Lawyer", 190000, 004);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 001, 001),
       ("Mike", "Chan", 002, null),
       ("Ashley", "Rodriguez", 003, 002),
       ("Kevin", "Tupik", 004, null),
       ("Kunal", "Singh", 005, 003),
       ("Malia", "Brown", 006, null),
       ("Sarah", "Lourd", 007, 004),
       ("Tom", "Allen", 008, null);