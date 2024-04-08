import { Express } from "express";
import LoginRoute from "./login-route";
import ExamRoute from "./exam-route";
import * as authMiddleware  from "../../middlewares/client/auth-middleware";
const routeClient = (app: Express): void => {
    const path = "/api";
    app.use(path + "/login", LoginRoute);
    app.use(path + "/exams",authMiddleware.authLogin , ExamRoute);
};

export default routeClient;