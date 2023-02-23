const departmentRoute = require('express').Router();
const mysql = require('mysql2')
const db = require('../connection/config')



db.get("/", (req, res) => {
console.log("view all department routes")
});


db.post("/addDepartment", (req, res) => {
  console.log("add a department routes")
});

db.put("/update/id", (req, res) => {
  console.log("update a department routes")
});

db.delete("/delete/id", (req, res) => {
  console.log("delete a department routes")
});


module.exports = departmentRoute
