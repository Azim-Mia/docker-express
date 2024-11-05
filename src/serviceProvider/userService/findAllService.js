const { notFound,badRequest} =require('../errorHandle/customErrors.js');
const findAllService =async(model)=>{
  const result = await model.find();
  if(!result){
    return new notFound("Users is Not Found");
  }else{
    return result;
  }
}
module.exports = findAllService;