import express from 'express';
import { type } from 'os';

const server = express();
const PORT = 4000;


// authentication function
const auth = (req,res,next)=>{
    if(req.query.password == '123'){
        next();
    }else{
        res.sendStatus(401);
        console.log("Wrong Password");
    }
}


// using auth after initializing
server.get('/',(req,res)=>{
    res.json({type: "GET"});
});

server.post('/',auth,(req,res)=>{
    res.json({type: "POST"});
});

server.delete('/',auth,(req,res)=>{
    res.json({type: "DELETE"});
});

server.patch('/',auth,(req,res)=>{
    res.json({type: "PATCH"});
});



// server.use(auth);


server.listen(PORT,()=>{
    console.log(`Server is running! on port http://localhost:${PORT}`);
});