import mongoose from "mongoose";
const kittySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    prompt:{
        type:String,
        required:true,
    },
    photo:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
        
    }
});

const imagedata=mongoose.model("image",kittySchema);
export default imagedata;