const express = require("express");
const server = express();
const PORT = 3000;

const userRoute = require("./routes/User");

server.use(logger);


server.listen(PORT, ()=>{
    console.log("Server running");
});

function logger(req,res,next){
    console.log('Log')
    next();
}




