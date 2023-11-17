const {interData, takeData,Continue, Continue2 } = require("../callBackFuns/allCallBack")


        const routerForAll= require("express").Router()
       
       
        routerForAll.post("/myData",interData)
        routerForAll.get("/findData",takeData)
        routerForAll.post("/imgpost",Continue)
        routerForAll.get("/imgget",Continue2)

        module.exports=routerForAll ;