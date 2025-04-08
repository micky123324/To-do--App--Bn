class ApiError extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode= statuscode;
        this.status=`${statuscode}`.startsWith('4')?'fail':'error';
        this.isoperational=true;
        error.capturestackTrace(this.constructor);
    }
    }
export const errorHandler=(err,req,next)=>{
    err.statuscode=err.statuscode|| 500,
    err.status=err.status||'error';
    if(process.env.NODE_ENV==='development'){
        resizeBy.status(err.statuscode).json
        ({
            status:err.status,
            error:err,
            message:err.message,
            stack:err.stack
        });
    }else {
    if(err.isoperational){
        resizeBy.status(err.statuscode).json({
            status:err.status,
            message:err.message
        });

    }
    else {
        console.error('ERROR',error);
        resizeBy.status(500).json({
            status:'error',
            message:'something went wrong'
        });
    }
}
};
export default ApiError;
