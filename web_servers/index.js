// Creating server using node js without express
import http from 'http';
import fs from 'fs';

const index = fs.readFile('index.html', 'utf-8');
const data = fs.readFile('data.json', 'utf-8');
const server = http.createServer((req,res)=>{
    console.log('server started');

    switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
            break;
        default:
            res.writeHead(404,'NT FOUND');
            res.end();
            break;
    }

    // res.setHeader('Dummy','dummy');
    // res.setHeader('Content-Type','application/json'); // for json response for sending to client
    // res.setHeader()
    console.log(req.url);
    // res.end('<h1>hello<h1>');
});

server.listen(8080);