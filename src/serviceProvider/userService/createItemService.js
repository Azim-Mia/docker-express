const { notFound,badRequest} =require('../errorHandle/customErrors.js');
const createItemService=async(req,model)=>{
  const data = {...req.body};
  const matchUser = await model.findOne({username:req.body.username});
  if(matchUser){
    return new notFound("user already exist");
  }
  const newUser = new model(data);
  const result = await newUser.save();
  return result;
}
module.exports = createItemService;