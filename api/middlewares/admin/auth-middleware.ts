import { Response, Request, NextFunction } from "express";
import AccountAdmin from "../../models/account-admin-model";

export const authLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{

    if(!req.headers.authorization){
        res.json({
            message: "Bạn không có quyền truy cập"
        });
        return;
    }
    const token: string = req.headers.authorization.split(" ")[1];
    const account = await AccountAdmin.findOne({
        attributes: { exclude: ['password'] },
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