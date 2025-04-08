import { verifyToken } from '../utils/jwt.js'; 
import user from '../models/user.js';
import ApiError from '../utils/errorHndler.js';
export const protect = async(req , res , next) =>{
    try {
let token;
if (
    req.headers.authorisation&&
    req.headers.authorisation.startsWith('Bearer')

){
    token=req.headers.authorization.split('')[1];

}
if(!token){
    return next(new ApiError('Not authorized to access this route,4010'));

}
const{valid, expired, decoded}=verifyToken(token);
if(!valid){
    return next(
        new ApiError(
            expired? 'your token has expired' : 'Invalid token',401

        )

    );

}
const user = await user.findById(decoded.id);
if(!user){
    return next(
        new ApiError('the user belonging to this token no longer exists',401)

    );
}
req.user=user;
next();

    }
    catch (error) {
        next(new ApiError('Not authorized to access this route',401));
    } 
};
export const authorize =(... roles)=>{
    if(!roles.includes(req.user.role)){
        return next(
            new ApiError(
                `User role authorized to access this route`,403

            )

        );

    }
    next();

};


