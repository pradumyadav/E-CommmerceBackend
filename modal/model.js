

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


        const ContinueImg =mongo.Schema({
            id:Number,
            link:String
        })


            const storeSchema=mongo.model("AllData",userSchema);

            const ContinueSchema =mongo.model("ImgData",ContinueImg)
            
            module.exports={storeSchema,ContinueSchema}