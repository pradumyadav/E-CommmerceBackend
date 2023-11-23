

    const express = require("express")
    const app= express();
     app.use(express.json())

    const cors =require("cors");
    const stripe=require("stripe")("sk_test_51OF9HNSGSBjFGMDatfWIxrvEPfOtKJ8TOudE68qT3g5E8ziq4CS9yiGU4uEhz5VyAsaYTZr8H2a2TYUrHjJzZoZi00CnHzpcJA")

const routerForAll = require("./router/routerForAll");
const connection = require("./configure/db");
const userRoutes= require("./router/userRoutes")


    app.use (cors({
        origin: "*",
        
    }))

    app.use("/api",routerForAll)
    app.use("/user",userRoutes)

//checkOut Api.....

    app.post("/out/create-checkout-session",async(req,res)=>{
        const{products}=req.body;
        console.log(products)
       const lineItems =products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{

                name:product.title,

            },
            unit_amount:product.price * 100
        },
        quantity:product.quantity
       }))
       
        const session =await stripe.checkout.sessions.create({
            payment_method_types:["card"],
             line_items:lineItems,
            mode:"payment",
            success_url:"https://inspiring-mermaid-df4028.netlify.app",
            cancel_url:"https://inspiring-mermaid-df4028.netlify.app",

        })
        res.json({id:session.id})
    })

    app.listen(4001,async()=>{
        try{
           await connection();
            console.log("We Are on 4001")
        }
        catch(err){
            console.log(err)
        }
    })