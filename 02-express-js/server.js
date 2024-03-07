const express = require('express');

const PORT = 4000;

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();

app.use(express.json()); // body-parser 미들웨어를 사용하여 req.body를 사용할 수 있게 함
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`start : ${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;

    console.log(`end: ${req.method} ${req.baseUrl} ${diffTime}ms`);
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})