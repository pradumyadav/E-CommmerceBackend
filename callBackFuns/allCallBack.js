

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


            const searchItems= async (req, res) => {
                const { title } = req.query;
                const queryObj = {};
                if (title) {
                  queryObj.title = { $regex: title, $options: "i" };
                }
               
                try {
                  const finds = await storeSchema.find(queryObj);
                  res.send(finds);
                } catch (error) {
                  console.error("Error fetching data:", error);
                  res.status(500).send("Internal Server Error");
                }
              };
        module.exports={interData,takeData,Continue,Continue2,searchItems}
        