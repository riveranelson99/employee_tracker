-- THIS PAGE SERVES AS A QUERY TEST GROUND BEFORE INCORPORATING IT INTO THE MAIN INDEX FILE --
-- THERE IS NO STRUCTURE TO BE FOUND HERE, ONLY BRAINSTORMING --


-- SELECT
--     employee.id, employee.first_name, employee.last_name , role.title, department.name AS 'department', role.salary, CONCAT(manager.first_name, " " , manager.last_name) AS 'manager'
--     FROM employee LEFT JOIN role ON employee.role_id = role.id
--     LEFT JOIN department ON role.department_id = department.id
--     LEFT JOIN employee manager ON manager.id = employee.manager_id && department.id;

-- SELECT
--     manager.id, role.id, role.title
--     FROM employee LEFT JOIN role ON employee.role_id = role.id
--     LEFT JOIN department ON role.department_id = department.id
--     LEFT JOIN employee manager ON manager.id = employee.manager_id && department.id;

-- SELECT manager.id, role.id, role.title
-- FROM employee
-- LEFT JOIN role ON employee.role_id = role.id
-- LEFT JOIN department ON role.department_id = department.id
-- LEFT JOIN employee manager ON manger.id = employee.manager_id && department.id;

-- UPDATE employee SET role_id = 4, manager_id = 4 WHERE id = 8;

-- SELECT manager.id, manager.first_name, manager.last_name FROM employee LEFT JOIN employee manager ON manager.id = employee.manager_id WHERE manager.id IS NOT NULL;

-- SELECT manager.id, manager.first_name, manager.last_name
-- FROM employee
-- LEFT JOIN employee manager ON manager.id = employee.manager_id
-- WHERE manager.id IS NOT NULL;

-- SELECT role.id, role.title FROM role;

-- SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id FROM employee;

-- SELECT manager.id, manager.first_name, manager.last_name
-- FROM employee
-- LEFT JOIN employee manager ON manager.id = employee.manager_id
-- WHERE manager.id IS NOT NULL;

-- UPDATE manager SET role_id = 8 WHERE id = 1;

-- SELECT role.id, role.title, department.name, role.salary
--     FROM role INNER JOIN department ON role.department_id = department.id;

-- SELECT department.id, department.name FROM department;

-- SELECT
--     SUM(DISTINCT salary)
-- FROM
--     role LEFT JOIN department ON ;

-- SELECT role.salary
-- FROM role
-- INNER JOIN
-- (
--     SELECT department.name AS utilized_budget 
--     FROM department
--     GROUP BY salary 
--     HAVING SUM(ORDERAMOUNT)>5000
-- )

-- SELECT department.id, department.name,
-- SUM(role.salary) AS utilized_budget
-- FROM department, role
-- WHERE role.department_id=department.id
-- GROUP BY department.id
-- ORDER BY department.id;

-- SELECT employee.id, first_name, last_name, title, role_id FROM employee;

-- SELECT (
--     SELECT employee.id, first_name, last_name, title, role_id FROM employee INNER JOIN role ON role_id = role.id
-- ) AS employee_data,
-- (
--     SELECT role.id, role.title FROM role
-- ) AS role_data;

-- SELECT employee.id, first_name, last_name, role_id, title
-- FROM employee
-- INNER JOIN role
-- ON employee.role_id = role.id;

-- SELECT role.id, role.title
-- FROM role
-- INNER JOIN employee
-- ON role.id = employee.role_id;