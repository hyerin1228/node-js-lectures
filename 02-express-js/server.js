const express = require('express');

const PORT = 4000;

const Users = [
    {
        id: 0,
        name: 'Jack'
    },
    {
        id: 1,
        name: 'Jennifer'
    },
];


const app = express();

app.use(express.json()); // body-parser 미들웨어를 사용하여 req.body를 사용할 수 있게 함

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`start : ${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;

    console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});


app.get('/users', (req, res) => {
    res.send(Users);
});


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/users', (req, res) => {
    // console.log('req.body.name', req.body.name);

    if(!req.body.name){
        return res.status(400).json({
            error: 'Missing user name'
        })
    }

    const newUser = {
        name: req.body.name,
        id: Users.length
    };

    Users.push(newUser);
    res.json(newUser);
});


app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    const user = Users[userId];

    if(user){
        res.json(user);
    }else{
        res.sendStatus(404);
    }
});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})