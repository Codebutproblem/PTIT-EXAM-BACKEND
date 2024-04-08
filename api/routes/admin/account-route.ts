import { Router } from "express";
import * as controller from "../../controllers/admin/account-controller";

const router = Router();

router.get("/", controller.getAccountList);
router.post("/create", controller.createAccount);
router.delete("/delete/:id", controller.deleteAccount);
router.get("/results",controller.getResultList);
export default router;