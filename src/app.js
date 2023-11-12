const express = require("express");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})