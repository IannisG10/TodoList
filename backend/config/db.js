
const mongoose = require("mongoose");

const DBconnect = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/mydatabase",{
            useNew
        })
    }catch(err){

    }
}