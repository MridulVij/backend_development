// // Method 1
// // const lib = require('./lib.js');
// // console.log(lib.sub(20,10), lib.sum(10,20));

// // Method 2
// import {sub, sum} from './lib.js';
// console.log(sub(10,20),sum(20,10));

// // File System reading externally
// import fs from 'fs';

// // synchronous
// // const fileContent = fs.readFileSync('./demo.txt','utf-8');
// // const time = performance.now();
// // console.log(fileContent);


// // asynchrounous
// const time = performance.now();
// fs.readFile('./demo.txt', 'utf-8',(err,fileContent)=>{
//     console.log(fileContent);
// });
// console.log(time);

// Node 
import express from 'express';

const server = express();
server.listen(2020);


