const express = require('express');

const usersRouter = express.Router();
const usersController = require('../controllers/users.controller');


usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:userId', usersController.postUser);
usersRouter.post('/', usersController.getUser);


module.exports = usersRouter;
