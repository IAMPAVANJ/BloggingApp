const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Working fine");
})

app.listen(8000,()=>{
    console.log("server is up at 8000")
})