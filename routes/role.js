const roleRoute = require('express').Router();
const mysql = require('mysql2')
const db = require('../connection/config')


db.get("/", (req, res) => {
  console.log("view all role")

});


db.post("/addrole", (req, res) => {
  console.log("add a role")
});

db.put("/update/id", (req, res) => {
  console.log("update a role")

});

db.delete("/delete/id", (req, res) => {
  console.log("delete a role")

});


module.exports = roleRoute