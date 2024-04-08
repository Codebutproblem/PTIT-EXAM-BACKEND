import { Router } from "express";
import * as controller from "../../controllers/admin/exam-controller";
const router = Router();

router.get("/", controller.getExamList);
router.post("/create", controller.createExam);
router.patch("/edit/:id", controller.editExam);
router.delete("/delete/:id",controller.deleteExam);
router.get("/details",controller.getExamDetailList);
export default router;