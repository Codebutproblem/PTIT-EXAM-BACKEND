import { Router } from "express";
import * as controller from "../../controllers/client/exam-controller";

const router = Router();

router.get("/", controller.getListExam);
router.get("/:id", controller.getExamQuestion);
router.post("/submit/:id",controller.postAnswerQuestion);
export default router;