

        const mongo= require("mongoose")
       
        const userSchema =mongo.Schema({

            id:"number",
            cat:"string",
            type:"string",
            title:"string",
            img:"string",
            description:"string",
            price:"number"

        })


            const storeSchema=mongo.model("AllData",userSchema);

            module.exports={storeSchema}