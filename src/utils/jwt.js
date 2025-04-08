import jwt from 'jsonwebtoken';
import config from'../config/env.js';
// Generate jwt token 
export const genereteToken=(userId)=>{
    return jwt.sign(
        {
            id:userId
        },
        config.jwtsecret,{
            expireIn:config.jwtExpiration
        }
    );

};
// verify jwt token
export const verifyToken=(token)=>{
    try{
        const decoded=jwt.verify(token,config.jwtsecret);
        return{
            valid:true,expired:false,decoded
        };

    }catch (error){
        return{
            valid:false,
            expired:error.name==='TokenExpiredError',
            decoded:null
        }
    }
    };
