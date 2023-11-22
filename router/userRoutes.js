



const userRoutes = require('express').Router();

const {Signup,Login, addToCart} = require('../controller/controller')

userRoutes.post('/register',Signup)
userRoutes.post('/login',Login)
// userRoutes.post('/addtocart',addToCart)


module.exports = userRoutes