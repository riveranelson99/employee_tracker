# employee_tracker
Building an app utilizing sql in order to track employee information.

# Pseudo Code

Node.js, Inquirer, and MySQL.

create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

* WANT to be able to view and manage the departments, roles, and employees in my company THAT I can organize and plan my business
* WHEN the application is started, THEN the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role are presented
* WHEN all departments are viewed, THEN a formatted table showing department names and department ids are presented
* WHEN all roles are viewed, THEN the job title, role id, the department that role belongs to, and the salary for that role are presented
* WHEN all employees are viewed, THEN a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to are presented
* WHEN a department is added, THEN a prompt is given to enter the name of the department and that department is added to the database
* WHEN a role is added, THEN a prompt is given to enter the name, salary, and department for the role and that role is added to the database
* WHEN an employee is added, THEN a prompt is given to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
* WHEN an employee role is updated, THEN a prompt is given to select an employee to update and their new role and this information is updated in the database


## Getting Started

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

**Important**: You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.

You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

