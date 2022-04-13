const express = require("express");

const app = express();

app.get("/api",(req,res) =>{
    res.json({"users":["userone","userTwo"]})
})


app.listen(3100,()=>{
    console.log("server has started")
})