const express = require('express');
const path = require('path');

const PORT = 4000;

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();

app.set('view engine', 'hbs'); // 템플릿 엔진을 사용하기 위한 설정
app.set('views', path.join(__dirname, 'views')); // 템플릿 파일이 위치한 디렉토리를 설정

app.use('/static', express.static('public')); // 정적 파일을 제공하는 미들웨어


app.use(express.json()); // body-parser 미들웨어를 사용하여 req.body를 사용할 수 있게 함
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`start : ${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;

    console.log(`end: ${req.method} ${req.baseUrl} ${diffTime}ms`);
});

app.get('/', (req, res) => {
    res.render('index', { imageTitle: "It is a forest" })
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})