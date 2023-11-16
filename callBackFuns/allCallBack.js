
//const {display, top3} =require("../allData/allData")
const { display } = require("../allData/allData")
const {storeSchema}= require("../modal/model")
       

                const Top3 =(req,res)=>{
                        res.send(top3)
                }

            const interData=async(req,res)=>{
                const first =await storeSchema.create(display)
                res.send(first)
            }
            const takeData =async(req,res)=>{
                const second =await storeSchema.find({})
                res.send(second)
            }


        module.exports={interData,takeData,Top3}
        