import express from "express";
import Errormiddleware from "./middleware/error.js";
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";


// import user from "./routes/userroute.js";
// import chat from "./routes/chatroute.js"
import image from "./routes/imageroute.js"
import post from "./routes/postroute.js"
const app=express();



app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// app.use(fileUpload())

// app.use("/api",user);
// app.use("/api",chat);
app.use("/api",image);
app.use("/api",post)





app.use(Errormiddleware);
export default app;