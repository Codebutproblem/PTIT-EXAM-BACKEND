import { Router } from "express";
import * as controller from "../../controllers/client/login-controller";

const router = Router();

router.post("/", controller.loginPost);

export default router;