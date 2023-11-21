



    


    const mongo= require("mongoose")
       
    const userInfo =mongo.Schema({

      name:{
        type:String,
       
       },
      email:{
        type:String,
        unique:true,
        required:true,
      },
      password:{
        type:String,
        required:true,     
      }

    })


        const user=mongo.model("UserData",userInfo);

        module.exports=user