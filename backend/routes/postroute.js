import express from "express"
import { createpostcontroller } from "../controller/postroutecontroller.js"
const router=express.Router()

router.route("/post/create").post(createpostcontroller)


export default router;