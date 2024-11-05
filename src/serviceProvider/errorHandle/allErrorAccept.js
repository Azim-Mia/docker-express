//setup -2
const {GeneralError} =require("./customErrors.js");
const allErrorAccept = (err,req,res,mext)=>{
  if(err instanceof GeneralError ){
    const code = err.getCode();
    return res.status(code).json({name:err.name,message:err.message});
  }
  return res.status(500).json({name:err.name, message:err.message});
}
module.exports = allErrorAccept;