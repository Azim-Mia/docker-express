//custom error import
const { notFound,badRequest} =require('../errorHandle/customErrors.js');
const findSingle =async(model,id)=>{
  let result = await model.findOne({_id:id});
  if(!result){
 return new notFound("user not found");
  }else{
  return result;
  }
}
module.exports=findSingle;