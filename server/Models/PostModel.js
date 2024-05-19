import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   title : {type :String },
   caption : {type :String },
   tag : [{type :String }],
   img : {type :String},
})

export default mongoose.model('post',userSchema);