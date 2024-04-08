import { Response, Request } from "express";
import AccountAdmin from "../../models/account-admin-model";
import * as LoginService from "../../services/admin/login-service";
// Xử lý đăng nhập
export const loginPost = async (req: Request, res: Response): Promise<void> =>{
    const username: string = req.body.username;
    const password: string = req.body.password;
    const account = await LoginService.findAccount(username, password);
    if(!account){
        res.json({
            message: "Đăng nhập không thành công"
        });
        return;
    }
    res.json({
        message: "Đăng nhập thành công",
        username: account.username,
        token: account.token
    });
};