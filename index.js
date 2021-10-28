const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

// Display logo text, load main prompts
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
};

function viewAllEmployees () {
// return the database of all employees
// return to loadMainPrompt
};

function employeesDepartmentPrompt () {
// return list of available departments
// based on choice, return selected department table/db
// return to loadMainPrompt
};

function employeesByManagerPrompt () {
// return list of all employees
// based on choice, return selected employees manager status
// return to loadMainPrompt
};

function addEmployeePrompt () {
// ask user the employees first name
// ask user the employees last name
// return a list of available positions (Sales Lead, Salesperson, Lead Engineer, etc.)
// return a list of whom will be the new employees manager
// add the employee to the database based on selection criteria
// return to loadMainPrompt
};

function removeEmployeePrompt () {
// return list of all employees
// remove selected employee from the database
// return to loadMainPrompt
};

function updateEmployeePrompt () {

};

function updateEmployeeManagerPrompt () {

};

function viewAllRoles () {

};

function addRolePrompt () {

};

function removeRolePrompt () {

};

function viewAllDepartments () {

};

function addDepartmentPrompt () {

};

function removeDepartmentPrompt () {

};

function viewTotalBudget () {

};

function quit () {

};