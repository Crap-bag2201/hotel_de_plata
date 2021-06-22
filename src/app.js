const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 8000 ;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.get("", (req,res)=>{
    res.send("Welcome To My First Website")  
    
})
app.get("/about", (req,res)=>{
    res.send("Welcome To My First about Website")    
})
app.get("t", (req,res)=>{
    res.send("Welcome To My First info Website")    
})
app.get("/*", (req,res)=>{
    
    res.send("404 error, page not found")    
})



app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})