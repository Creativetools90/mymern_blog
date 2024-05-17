import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    user : {type : String,required: true , unique: true},
    pass: {type : String,required: true,unique: true},
    email :{type : String,required: true,unique: true},
})



export default mongoose.model('Admin',AdminSchema);

