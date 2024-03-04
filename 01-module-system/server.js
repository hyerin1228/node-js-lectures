// const axios = require('axios');

// axios.get('https://naver.com')
//     .then((response) => {console.log(response)})
//     .catch((error) => {console.log(error)});



const http = require('http');
const port = 4000;
const targetObject = { a: "a", b: "b" };

const server = http.createServer((req, res) => {
    // writeHead는 한 번만 호출되어야 하며 end()가 호출되기 전에 호출되어야 합니다.
    // 상태 코드는와 응답 헤더를 클라이언트에 보냅니다.
    if(req.method === 'POST' && req.url === '/home'){
        req.on('data', (data) => {
            console.log(data);
            const stringfiedData = data.toString();
            console.log(stringfiedData);
            Object.assign(targetObject, JSON.parse(stringfiedData));
        })
    }else{
        if(req.url === '/home'){
            res.writeHead(200, {
                // 'Content-Type': 'text/plain'
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(targetObject));
        }else if(req.url === '/about'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<body>');
            
            res.write('<h1>About Page</h1>');
    
            res.write('</body>');
            res.write('</html>');
        }else{
            res.statusCode = 404;
            res.end('Not Found');
        }
    }
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});