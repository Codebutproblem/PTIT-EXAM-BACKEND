import {Express} from "express";
import AccountRoute from "./account-route";
import LoginRoute from "./login-route";
import ExamRoute from "./exam-route";
import * as authMiddleware  from "../../middlewares/admin/auth-middleware";

const routeAdmin = (app:Express):void =>{
    const pathAdmin: string = "/api/admin";
    app.use(pathAdmin + "/login", LoginRoute);
    app.use(pathAdmin + "/accounts",authMiddleware.authLogin , AccountRoute);
    app.use(pathAdmin + "/exams",authMiddleware.authLogin ,ExamRoute);
    
};
export default routeAdmin;