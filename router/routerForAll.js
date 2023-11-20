const {interData, takeData,Continue, Continue2, searchItems } = require("../callBackFuns/allCallBack")


        const routerForAll= require("express").Router()
       
       
        routerForAll.post("/myData",interData)
        routerForAll.get("/findData",takeData)
        routerForAll.post("/imgpost",Continue)
        routerForAll.get("/imgget",Continue2)
        routerForAll.get("/search",searchItems)

        module.exports=routerForAll ;