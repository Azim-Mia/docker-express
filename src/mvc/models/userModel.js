const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    trim:true,
    maxLength:[20, "maxLength 20 character"],
    minLength:[3, "minimum length 3 character"],
    required:[true, "Name is empty"],
  },
  createAt:{
  type:Date,
  default:new Date(),
  },
});
const User = new mongoose.model("user", userSchema);
module.exports = User;