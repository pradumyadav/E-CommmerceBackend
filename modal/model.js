

        const mongo= require("mongoose")
       
        const userSchema =mongo.Schema({

            id:"number",
            cat:"string",
            type:"string",
            title:"string",
            img:"string",
            description:"string",
            price:"number",
            quantity:"number"

        })


        const ContinueImg =mongo.Schema({
            id:Number,
            link:String
        })

        // const addToCartSchema =mongo.Schema({

        //     id:"number",
        //     cat:"string",
        //     type:"string",
        //     title:"string",
        //     img:"string",
        //     description:"string",
        //     price:"number",
        //     quantity:"number"
        // })

            const storeSchema=mongo.model("AllData",userSchema);

            const ContinueSchema =mongo.model("ImgData",ContinueImg)

            // const =mongo.model("cartData",addToCartSchema)
            
            module.exports={storeSchema,ContinueSchema}