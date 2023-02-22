
const miniApp = require('express').Router();
const employeeRouter = require('./employee');
const departmentRouter = require('./department');
const roleRouter = require('./role');



miniApp.use('/roles', roleRouter);
miniApp.use('/employees', employeeRouter);
miniApp.use('/departments', departmentRouter);

module.exports = miniApp;
