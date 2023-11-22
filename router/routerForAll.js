const {interData, takeData,Continue, Continue2, searchItems } = require("../callBackFuns/allCallBack")
//const {Cart, findCart}= require("../controller/cartController")



        const routerForAll= require("express").Router()
       
       
        routerForAll.post("/myData",interData)
        routerForAll.get("/findData",takeData)
        routerForAll.post("/imgpost",Continue)
        routerForAll.get("/imgget",Continue2)
        routerForAll.get("/search",searchItems)
        // routerForAll.post("/addcart",Cart)
        // routerForAll.get("/findcart",findCart)

        module.exports=routerForAll ;