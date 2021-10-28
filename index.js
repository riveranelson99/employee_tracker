const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
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
// return the database of all employees
// return to loadMainPrompt
    loadMainPrompt();
};

function employeesDepartmentPrompt () {
// return list of available departments
// based on choice, return selected department table/db
// return to loadMainPrompt
    loadMainPrompt();
};

function employeesManagerPrompt () {
// return list of all employees
// based on choice, return selected employees manager status
// return to loadMainPrompt
    loadMainPrompt();
};

function addEmployeePrompt () {
// ask user the employees first name
// ask user the employees last name
// return a list of available positions (Sales Lead, Salesperson, Lead Engineer, etc.)
// return a list of whom will be the new employees manager
// add the employee to the database based on selection criteria
// return to loadMainPrompt
    loadMainPrompt();
};

function removeEmployeePrompt () {
// return list of all employees
// remove selected employee from the database
// return to loadMainPrompt
    loadMainPrompt();
};

function updateEmployeePrompt () {
    loadMainPrompt();
};

function updateManagerPrompt () {
    loadMainPrompt();
};

function viewAllRoles () {
    loadMainPrompt();
};

function addRolePrompt () {
    loadMainPrompt();
};

function removeRolePrompt () {
    loadMainPrompt();
};

function viewAllDepartments () {
    loadMainPrompt();
};

function addDepartmentPrompt () {
    loadMainPrompt();
};

function removeDepartmentPrompt () {
    loadMainPrompt();
};

function viewTotalBudget () {
    loadMainPrompt();
};

function quit () {

};