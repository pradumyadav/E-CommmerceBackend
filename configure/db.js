


            const url ="mongodb+srv://pradumyadav17:pradum431@cluster0.wfcnawr.mongodb.net/E-commerce?retryWrites=true&w=majority";
            const mongoose= require("mongoose")


            const connection =async()=>{
                try{

                    await mongoose.connect(url)
                    console.log("Data Base Connected")
                }
                catch(err){
                    consolr.log("This is wrong",err)
                }
            }

            module.exports =connection