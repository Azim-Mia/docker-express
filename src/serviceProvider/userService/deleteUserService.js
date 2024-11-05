//custom error import
const { notFound,badRequest} =require('../errorHandle/customErrors.js');
const deleteUserService =async(model,id)=>{
  let user = await model.findById({_id:id});
  if(user){
    let result = await model.deleteOne({_id:id});
    return result;
  }
  //custom error use
 return new notFound("user not found");
}
module.exports=deleteUserService;