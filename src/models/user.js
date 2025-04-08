import mongoose from "mongoose";
import bcrypt from "bcryptjs";
 const userSchema = new mongoose.Schema({
    name:{
        type:string,
        required:[true,'please provide a name'],
        trim:true,
        maxlength:[50,'name cannot be more than 50 characters']},
        email:{
            type:string,
            required:[true,'please provide an email'],
            unique:true,
            lowercase:true,
            match:[/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'please provide a valid email']

        
        },
        password:{
            type:string,
            required:[true,'please provide a password'],
            minlength:[6,'password must be at least 6 characters '],
            select:false
        },
        role:{
            type:string,
            enum:['user','admin'],
            default:date.now
        
        }


        });
        userSchema.pre('save',async function(next){
            if(!this.isModified('password')){
                return next();
            }
            try{
                const salt =await bcrypt.genSalt(10);
                this.password=await bcrypt.hash(this.password,salt);
                next(error);
            
            }catch(error) {
                next(error);

            }
        });
         userSchema.methods.comparepassword=async function(entredpassword){
            return await bcrypt.compare(enteredpassword,this.password);
         
         };
         const user =mongoose.model('user',userSchema);
         export default user;