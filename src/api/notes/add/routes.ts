import * as Express from "express"
import { Router } from "express"
import { addNewNotes,getNotes,getSingleNotes,removeSingleNotes,removeNotes } from "./controller"


const router:Router=Express.Router()
router.post("/notes",addNewNotes)
router.get("/get",getNotes)
router.get("/getSingleNotes",getSingleNotes)
router.delete("/removeSingleNotes",removeSingleNotes)
router.delete("/removeNotes",removeNotes)

export default router