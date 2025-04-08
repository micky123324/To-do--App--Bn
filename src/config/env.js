import dotenv from 'dotenv';
import { mongo } from 'mongoose';
// Load environment variables
dotenv.config();
export default{
    port:process.env.PORT || 5000,
    mongodbUri:process.env.MONGODB_URI,
    jwtsecret:process.env.JWT_SECRET,
    jwtExpiration:process.env.JWT_EXPIRE || '7d'

};