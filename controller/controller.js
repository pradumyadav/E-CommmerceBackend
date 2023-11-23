const User = require("../modal/userInfo")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Signup = async (req,res)=>{
        try{      
            const {email, password,name} = req.body;
            console.log(req.body)

            const existingUser = await User.findOne({email})

            if(existingUser){
                return res.status(400).json({message:"User already exist"})
            }

            const hashedPassword = await bcrypt.hash(password,10)

            const newUser  =  new User({email,password:hashedPassword})
            await newUser.save()

            const token = jwt.sign({userId:newUser._id},"secret",{expiresIn:"2d"})
            return res.status(201).json({ message: 'User created successfully',token, email,name});
          
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
}

const Login = async (req,res)=>{
    try{

            const {email,password,name} = req.body
            const user = await User.findOne({email})
            
            if(!user){
                return res.status(404).json({message:"User not found"})
            }

            const isPasswordValid = await bcrypt.compare(password,user.password)

            if(!isPasswordValid){
                return res.status(401).json({message:"Password is inValid"})
            }

            const token = jwt.sign({userId:user._id},"secret",{expiresIn:"2d"})
          
         
            return res.status(200).json({message:"User is successfully logged In",email,token,name})
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
}




module.exports = {Signup,Login}