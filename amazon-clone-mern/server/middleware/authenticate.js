const jwt = require("jsonwebtoken");
const USER = require("../models/userSchema");
const secretKey = "ishapaghdalishapaghdalishapaghda";

const authenticate = async(req,res,next)=>{
    try {
        const token = req.cookie.AmazonWeb;

        const verifyToken = jwt.verify(token,secretKey);
        console.log(verifyToken);
    } catch (error) {
        
    }
}