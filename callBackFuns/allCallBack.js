
//const {display, top3} =require("../allData/allData")
//const {ContinueImg } = require("../../E-clientSide/clientside/src/continue/ContinueImg")
//const {ContinueImg } = require("../../E-clientSide/clientside/src/continue/ContinueImg")
const { display, top3 } = require("../allData/allData")
const {storeSchema, ContinueSchema}= require("../modal/model")
       

                

            const interData=async(req,res)=>{
                const first =await storeSchema.create(display)
                res.send(first)
            }
            const takeData =async(req,res)=>{
                const second =await storeSchema.find({})
                res.send(second)
            }

            const Continue =async(req,res)=>{
                const third =await ContinueSchema.create(top3)
                res.send (third)
            }
            const Continue2 =async(req,res)=>{
                const third =await ContinueSchema.find({})
                res.send (third)
            }

        module.exports={interData,takeData,Continue,Continue2}
        