const {interData, takeData, Top3 } = require("../callBackFuns/allCallBack")


        const routerForAll= require("express").Router()
        routerForAll.get("/top3",Top3)
       
        routerForAll.post("/myData",interData)
        routerForAll.get("/findData",takeData)

        module.exports=routerForAll ;