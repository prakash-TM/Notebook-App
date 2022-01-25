import * as Express from "express";
import { Router } from "express"; // Not required
import { addNewNotebook,getNotebook,getSingleNotebook,removeSingleNotebook,removeNotebook } from "./controller";

// Initialising the router
const router: Router = Express.Router();

router.post("/notebook", addNewNotebook);
router.get("/get",getNotebook)
router.get("/getSingleNotebook",getSingleNotebook)
router.delete("/removeSingleNotebook",removeSingleNotebook)
router.delete("/removeNotebook",removeNotebook)

export default router;