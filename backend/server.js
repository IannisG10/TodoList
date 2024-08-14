//Appel du module Express.js
const express = require("express");
const app = express();

//declaration d'un port : 3000
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Server is running...")
})

app.listen(PORT,()=>{
    console.log(`Server is listen on ${PORT}`);
})
