
const miniApp = require('express').Router();
const movieRouter = require('./employee');
const reviewRouter = require('./department');
const movieRouter = require('./role');



miniApp.use('/movies', movieRouter);
miniApp.use('/reviews', reviewRouter);

module.exports = miniApp;
