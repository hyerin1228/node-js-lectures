const express = require('express');

const postsRouter = express.Router();
const postsController = require('../controllers/posts.controller');

// 어떤 유저가 posts 에 관한 정보를 받고 싶으면
postsRouter.get('/', postsController.getPost);


module.exports = postsRouter;