const createError = require('http-errors');
const User =require('../../../../docker-express/src/mvc/models/userModel.js');
const { errorResponse,successResponse } =require('../../../../docker-express/src/serviceProvider/responseHandle/responseHandle.js');
const deleteUserService=require('../../../../docker-express/src/serviceProvider/userService/deleteUserService.js')
const findSingle=require('../../../../docker-express/src/serviceProvider/userService/findSingleService.js')
const createItemService=require('../../../../docker-express/src/serviceProvider/userService/createItemService.js')
const findAllService=require('../../../../docker-express/src/serviceProvider/userService/findAllService.js')
const updateItemService = require('../../../../docker-express/src/serviceProvider/userService/updateService.js')
const createUserController = async(req,res,next)=>{
  try{
const result = await createItemService(req,User);
if(result instanceof Error){
  next(result, req,res)
}else{
  res.status(200).json({success:true, message:"user create sucessfull"});
}
  }catch(err){
    if(err instanceof Error){
      next(err);
    }
  }
}

const findAllUser =async(req,res,next)=>{
  try{
    const result = await findAllService(User);
    if(result instanceof Error){
      next(result, req, res)
    }else{
      res.status(200).json({success:true, message:"successFull", result:result});
    }
  }catch(err){
  if(err instanceof Error){
    next(createError(err.message));
  }
  }
}
const findUser =async(req,res,next)=>{
  try{
  const {id} = req.params;
    const result = await findSingle(User,id);
  if(result instanceof Error){
    next(result,req,res);
  }else{
    return res.status(200).json({success:true,message:"successFull", result:result});
  }
  }catch(err){
  next(err);
  }
}
const updateUser =async(req,res,next)=>{
  try{
  const result = await updateItemService(req, User);
  if(result instanceof Error){
    next(result,req,res);
  }else{
  res.status(201).json({success:true, message:"user Update"})
  }
  }catch(err){
    if(err instanceof Error){
      next(err)
    }
  }
}
const deleteUser =async(req,res,next)=>{
  try{
  const {id} =req.params;
  const result =await deleteUserService(User, id);
  if(result instanceof Error){
next(result);
  }else{
  res.status(200).send("User is deleted");
  }
  }catch(error){
      next(error);
  }
}

module.exports = {createUserController, findAllUser,findUser,updateUser,deleteUser};