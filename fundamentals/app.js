const express = require("express");
const server = express();
const PORT = 3000;

const userRoute = require("./routes/User");


server.listen(PORT, ()=>{
    console.log("Server running");
});


