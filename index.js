const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db/connection");
require("console.table");

init();

function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);
    loadMainPrompt();
}

function loadMainPrompt() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manger",
                    value: "VIEW_EMPLOYEES_BY_MANGER"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Update Employee Manger",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "View Total Utilized Budget By Department",
                    value: "VIEW_TOTAL_BUDGET_BY_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ])

    .then(response => {
        if (response.choice === "VIEW_EMPLOYEES") {
            viewAllEmployees();
        } else if (response.choice === "VIEW_EMPLOYEES_BY_DEPARTMENT") {
            employeesDepartmentPrompt();
        } else if (response.choice === "VIEW_EMPLOYEES_BY_MANGER") {
            employeesManagerPrompt();
        } else if (response.choice === "ADD_EMPLOYEE") {
            addEmployeePrompt();
        } else if (response.choice === "REMOVE_EMPLOYEE") {
            removeEmployeePrompt();
        } else if (response.choice === "UPDATE_EMPLOYEE_ROLE") {
            updateEmployeePrompt();
        } else if (response.choice === "UPDATE_EMPLOYEE_MANAGER") {
            updateManagerPrompt();
        } else if (response.choice === "VIEW_ROLES") {
            viewAllRoles();
        } else if (response.choice === "ADD_ROLE") {
            addRolePrompt();
        } else if (response.choice === "REMOVE_ROLE") {
            removeRolePrompt();
        } else if (response.choice === "VIEW_DEPARTMENTS") {
            viewAllDepartments();
        } else if (response.choice === "ADD_DEPARTMENT") {
            addDepartmentPrompt();
        } else if (response.choice === "REMOVE_DEPARTMENT") {
            removeDepartmentPrompt();
        } else if (response.choice === "VIEW_TOTAL_BUDGET_BY_DEPARTMENT") {
            viewTotalBudget();
        } else {
            quit();
        }
    })
};

function viewAllEmployees () {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name , role.title, department.name AS 'department', role.salary, CONCAT(manager.first_name, " " , manager.last_name) AS 'manager' FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
            loadMainPrompt();
        }
    })
};

function employeesDepartmentPrompt () {
    db.query(`SELECT department.id, department.name FROM department;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            const depName = res.map(department => ({name: department.name, value: department.id}));

            prompt([
                {
                    type: "list",
                    name: "department",
                    message: "Which department would you like to see employee's for?",
                    choices: depName
                }
            ])
        
            .then(res => {
                db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ?`, res.department, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(res);
                        loadMainPrompt();
                    }
                })
            })
        }
    })
};

function employeesManagerPrompt () {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name FROM employee;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            const employees = res.map(employees => ({name: employees.first_name + " " + employees.last_name, value: employees.id}));

            prompt([
                {
                    type: "list",
                    name: "manager",
                    message: "Which employee do you want to see direct reports for?",
                    choices: employees
                }
            ])
        
            .then(res => {
                db.query(`SELECT employee.id, employee.first_name, employee.last_name, department.name AS 'department', role.title FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE employee.manager_id = ?;`, res.manager, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(res);
                        loadMainPrompt();
                    }
                })
            })
        }
    })
};

function addEmployeePrompt () {
    db.query(`SELECT role.id, role.title FROM role;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            const role = res.map(role => ({name: role.title, value: role.id}));

            db.query(`SELECT manager.id, manager.first_name, manager.last_name FROM employee LEFT JOIN employee manager ON manager.id = employee.manager_id WHERE manager.id IS NOT NULL;`, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    res.push({first_name: "None", last_name: "", id: null});
                    const manager = res.map(manager => ({name: manager.first_name + " " + manager.last_name, value: manager.id}));

                    prompt([
                        {
                            name: "first_name",
                            message: "What is the employee's first name?"
                        },
                        {
                            name: "last_name",
                            message: "What is the employee's last name?"
                        },
                        {
                            type: "list",
                            name: "role",
                            message: "What is the employee's role?",
                            choices: role
                        },
                        {
                            type: "list",
                            name: "manager",
                            message: "Who is the employee's manager?",
                            choices: manager
                        }
                    ])

                    .then(res => {
                        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)`, [res.first_name, res.last_name, res.role, res.manager], (err, res) => {
                            if (err) {
                                console.log(err)
                            } else {
                                loadMainPrompt();
                            }
                        })
                    })
                }
            })
        }
    })
};

function removeEmployeePrompt () {
// return list of all employees
// remove selected employee from the database
// return to loadMainPrompt
    loadMainPrompt(); //('DELETE', db)
};

function updateEmployeePrompt () {
    db.query(`SELECT employee.id, first_name, last_name FROM employee;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            const employee = res.map(employee => ({name: employee.first_name + " " + employee.last_name, value: employee.id}));
            
            db.query(`SELECT role.id, role.title FROM role;`, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    const role = res.map(role => ({name: role.title, value: role.id}));

                    prompt([
                        {
                            type: "list",
                            name: "employee",
                            message: "Which employee would you like to update?",
                            choices: employee
                        },
                        {
                            type: "list",
                            name: "role",
                            message: "What will be the employee's new role?",
                            choices: role
                        }
                    ])

                    .then(res => {
                        db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [res.role, res.employee], (err, res) => {
                            if (err) {
                                console.log(err);
                            } else {
                                loadMainPrompt();
                            }
                        })
                    })
                }
            })
        }
    })
};

function updateManagerPrompt () {
    db.query(`SELECT employee.id, first_name, last_name FROM employee;`, (err,res) => {
        if (err) {
            console.log(err);
        } else {
            const employees = res.map(employee => ({name: employee.first_name + " " + employee.last_name, value: employee.id}));

            db.query(`SELECT manager.id, manager.first_name, manager.last_name FROM employee LEFT JOIN employee manager ON manager.id = employee.manager_id WHERE manager.id IS NOT NULL;`, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    res.push({first_name: "None", last_name: "", id: null});
                    const managers = res.map(manager => ({name: manager.first_name + " " + manager.last_name, value: manager.id})); 

                    prompt([
                        {
                            type: "list",
                            name: "employee",
                            message: "Which employee would you like to change the manager status of?",
                            choices: employees
                        },
                        {
                            type: "list",
                            name: "manager",
                            message: "Whom will be the employee's manager?",
                            choices: managers
                        }
                    ])

                    .then(res => {
                        db.query(`UPDATE employee SET manager_id = ? WHERE id = ?`, [res.manager, res.employee], (err, res) => {
                            if (err) {
                                console.log(err);
                            } else {
                                loadMainPrompt();
                            }
                        })
                    })
                }
            })
        }
    })
};

function viewAllRoles () {
    db.query(`SELECT role.id, role.title, department.name, role.salary FROM role INNER JOIN department ON role.department_id = department.id;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
            loadMainPrompt();
        }
    });
};

function addRolePrompt () {
    db.query(`SELECT department.id, department.name FROM department;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            const depName = res.map(department => ({name: department.name, value: department.id}));

            prompt([
                {
                    name: "title",
                    message: "What is the title of the role you would like to add?",
                },
                {
                    name: "salary",
                    message: "What is the salary of the role?",
                },
                {
                    type: "list",
                    name: "department",
                    message: "To which department does this role belong?",
                    choices: depName
                }
            ])
        
            .then(res => {
                db.query("INSERT INTO role(title, salary, department_id) VALUE (?, ?, ?)", [res.title, res.salary, res.department], (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        loadMainPrompt(); 
                    }
                });
            })
        }
    })
};

function removeRolePrompt () {
    loadMainPrompt();
};

function viewAllDepartments () {
    db.query(`SELECT department.id, department.name FROM department;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
            loadMainPrompt();
        }
    })
};

function addDepartmentPrompt () {
    prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])

    .then(res => {
        db.query(`INSERT INTO department(name) VALUE (?)`, res.name, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                loadMainPrompt();
            }
        })
    })
};

function removeDepartmentPrompt () {
    loadMainPrompt();
};

function viewTotalBudget () {
    db.query(`SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM department, role WHERE role.department_id=department.id GROUP BY department.id ORDER BY department.id;`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
            loadMainPrompt();
        }
    })
};

function quit () {
    const logoText = logo({ name: "Goodbye" }).render();

    console.log(logoText);
    process.exit();
};