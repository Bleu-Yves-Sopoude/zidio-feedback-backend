const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validateToken =asyncHandler(async(req, res, next)=>{
    let token;
    let authHeader =req.headers.Authorization || req.headers.authorizations;
    if (authHeader && authHeader.startsWith("Bearer")){
        token =authHeader.split("")[1]
        jwt.verify(token,process.env.ACCES_TOKEN_SECRET,(err, decoded) =>{
            if (err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user =decode.user;
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token");
        }
    }
});

module.exports = validateToken;