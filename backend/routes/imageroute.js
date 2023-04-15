import express from "express"
import { imagegeneratecontroller } from "../controller/imagecontroller.js";
const router=express.Router();

router.route("/image").post(imagegeneratecontroller)


export default router;