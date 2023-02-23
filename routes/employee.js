const employeeRoute = require('express').Router();
const mysql = require('mysql2')
const db = require('../connection/config')


db.get("/", (req, res) => {
  console.log("view all employees unsorted")
  
});

db.get("/manager_id", (req, res) => {
  console.log("view all employees sorted by manager")
});

db.get("/department_id", (req, res) => {
  console.log("view all employees sorted by department")

});

db.get("/salary-total", (req, res) => {
  console.log("view aggregate of all employees salary")

});

db.post("/addemployee", (req, res) => {
  console.log("add an employee")

});

db.put("/update/id", (req, res) => {
  console.log("update an employee")

});

db.delete("/delete/id", (req, res) => {
  console.log("delete a employee")

});

module.exports = employeeRoute