const express =require('express');
const {createUserController,findAllUser,findUser,updateUser,deleteUser} =require('/data/data/com.termux/files/home/docker-express/src/mvc/controllers/userController.js');

const {validatorUser}=require('/data/data/com.termux/files/home/docker-express/src/middleWare/allValidations/userValidator.js')
const runValidation =require('/data/data/com.termux/files/home/docker-express/src/middleWare/allValidations/runValidation.js')

const userRouter = express.Router();
userRouter.post('/',validatorUser,runValidation,createUserController);
userRouter.get('/', findAllUser);
userRouter.get('/:id', findUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
module.exports = userRouter;