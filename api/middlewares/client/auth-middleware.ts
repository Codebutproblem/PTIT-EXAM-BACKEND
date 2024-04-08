import { Response, Request, NextFunction } from "express";
import Account from "../../models/account-model";

export const authLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{

    if(!req.headers.authorization){
        res.json({
            message: "Bạn không có quyền truy cập"
        });
        return;
    }
    const token: string = req.headers.authorization.split(" ")[1];
    const account = await Account.findOne({
        attributes: { exclude: ['password', 'token'] },
        where:{
            token: token
        }
    });
    if(!account){
        res.json({
            message: "Bạn không có quyền truy cập"
        });
        return;
    }
    req["account"] = account;
    next();
}