import { Response, Request } from "express";
import Account from "../../models/account-model";

export const loginPost = async (req: Request, res: Response): Promise<void> =>{
    const username: string = req.body.username;
    const password: string = req.body.password;

    const account = await Account.findOne({
        where:{
            username: username
        }
    });
    
    if(!account){
        res.json({
            message: "Tài khoản không tồn tại"
        });
        return;
    }

    if(account.password !== password){
        res.json({
            message: "Sai mật khẩu"
        });
        return;
    }

    res.json({
        message: "Đăng nhập thành công",
        username: account.username,
        token: account.token
    });
};