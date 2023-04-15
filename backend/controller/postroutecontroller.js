import catchasyncerror from "../middleware/catchasyncerror.js"
import Errorhandler from "../utils/errorhandler.js";
import imagedata from "../model/imageschema.js"
import cloudinary from "cloudinary"

export const createpostcontroller=catchasyncerror(async(req,res,next)=>{
    const mycloud=await cloudinary.v2.uploader.upload(req.body.photo,{
        folder:"generator"
    })
    const {name,prompt}=req.body;
    const post=await imagedata.create({
        name,prompt,
        photo:{
            public_id:mycloud.public_id,
            url:mycloud.secure_url,
        }
    });
    res.status(200).json({
        success:true,
        post,
    })
})