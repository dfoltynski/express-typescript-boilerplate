import express from "express"
import { welcomeController, wowController } from "../controllers"

const router = express.Router();

router.get("/", welcomeController)

router.get("/wow/", wowController)

export default router;