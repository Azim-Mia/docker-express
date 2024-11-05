const mongoose =require('mongoose');
const {db_url} =require("../../docker-express/secret.js");
const connectDB=async()=>{
  try{
   const result= await mongoose.connect(db_url);
    if(!result){
      console.log("mongodb author problem");
    return;
    }else{
      console.log("docker-express db connection successfull");
    }
  }catch(err){
  if(err instanceof mongoose.Error){
     console.log(err.message);
  }
  console.log(err.message)
  }
}
module.exports=connectDB;