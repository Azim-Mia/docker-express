//custom error import
const { notFound,badRequest} =require('../errorHandle/customErrors.js');
const updateItemService =async(req,model)=>{
  const {id} =req.params;
  const {username} =req.body;
  const updateOptions= { new:true, runValidators:true, context:'query'};
  let updates={};
  for(let key in req.body){
  if(['username'].includes(key)){
      updates[key]=req.body[key];
    }
}
    const result =await model.findByIdAndUpdate(id,updates,updateOptions)
  if(!result){
   return new notFound("User is a Not Update"); 
  }else{
  return result;  
  }
}
module.exports=updateItemService;