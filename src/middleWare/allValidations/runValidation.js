const { errorResponse,successResponse } =require('../../../../docker-express/src/serviceProvider/responseHandle/responseHandle.js');
//need npm package npm i express-validator,
const {validationResult}=require('express-validator');
const runValidation=async(req,res,next)=>{
  try{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
    return res.status(422).json({success:false,message: errors.array()[0].msg,})
      return;
    }
  return next()
  }catch(error){
    next(error);
  }
}
module.exports=runValidation;