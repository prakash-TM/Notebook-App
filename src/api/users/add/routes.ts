import * as Express from "express"
import {Router} from "express"
import { Request,Response } from "express"
import { addNewUser,getUser,getSingleUser,removeSingleUser,removeUser } from "./controller"


const router:Router=Express.Router()
router.post("/user",addNewUser)
router.get("/get",getUser)
router.get("/getSingleUser",getSingleUser)
router.delete("/removeSingleUser",removeSingleUser)
router.delete("/removeUser",removeUser)


export default router