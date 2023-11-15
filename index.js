

    const express = require("express")
    const app= express();
    app.use(express.json())

    const cors =require("cors");
const routerForAll = require("./router/routerForAll");
const connection = require("./configure/db");
const userRoutes= require("./router/userRoutes")


    app.use (cors({
        origin:"*"
    }))

    app.use("/api",routerForAll)
    app.use("/user",userRoutes)


    app.listen(4001,async()=>{
        try{
           await connection();
            console.log("We Are on 4001")
        }
        catch(err){
            console.log(err)
        }
    })