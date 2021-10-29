-- SELECT
--     employee.id, employee.first_name, employee.last_name , role.title, department.name AS 'department', role.salary, CONCAT(manager.first_name, " " , manager.last_name) AS 'manager'
--     FROM employee LEFT JOIN role ON employee.role_id = role.id
--     LEFT JOIN department ON role.department_id = department.id
--     LEFT JOIN employee manager ON manager.id = employee.manager_id;

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

SELECT department.id, department.name,
SUM(role.salary) AS utilized_budget
FROM department, role
WHERE role.department_id=department.id
GROUP BY department.id
ORDER BY department.id;