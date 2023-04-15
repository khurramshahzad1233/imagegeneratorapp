import catchasyncerror from "../middleware/catchasyncerror.js"
import dotenv from "dotenv"
if(process.config.env!=="PRODUCTION"){
    dotenv.config({path:"backend/config.env"})
};
import Errorhandler from "../utils/errorhandler.js"
import { Configuration, OpenAIApi } from "openai";
const configuration=new Configuration({
    apiKey:process.env.openai_key
});
const openai=new OpenAIApi(configuration)




export const imagegeneratecontroller=catchasyncerror(async(req,res,next)=>{

    const {prompt,size}=req.body;

    console.log(prompt)
    const imagesize=
    size==="small"?"256x256":size==="medium"?"512x512":"1024x1024"

    const image=await openai.createImage({
        prompt,
        n:1,
        size:imagesize,
        response_format:"b64_json",
    });
    // const imageurl=image.data.data[0].url
    const newimage=image.data.data[0].b64_json;



    res.status(200).json({
        success:true,
        // img:imageurl
        img:newimage,
    })
})