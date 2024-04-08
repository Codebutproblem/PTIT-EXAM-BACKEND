import { Response, Request } from "express";
import Account from "../../models/account-model";
import * as AccountService from "../../services/admin/account-service";
import { Op} from "sequelize";
// Lấy danh sách tài khoàn sinh viên
export const getAccountList = async (req: Request,res: Response): Promise<void> =>{

    const queryObject = {
        keyword: ""
    };
    if(req.query.keyword){
        queryObject.keyword = req.query.keyword.toString();
    }
    const accounts = await Account.findAll({
        attributes: { exclude: ['password'] },
        raw:true,
        where:{
            [Op.and]:[
                {username: {[Op.like]: `%${queryObject.keyword}%`}}
            ]
        }
    });
    res.json(accounts);
};

// Tạo tài khoản sinh viên
export const createAccount = async (req: Request,res: Response): Promise<void> =>{
    const username: string = req.body.username;
    const password: string = req.body.password;
    const existAccount = await Account.findOne({
        where:{
            username: username
        }
    });
    if(existAccount){
        res.json({
            message: "Tài khoản đã tồn tại"
        });
        return;
    }

    const account = await Account.create({
        username: username,
        password: password
    });
    res.json({
        message: "Tạo tài khoản sinh viên thành công",
        username: account.username,
        token: account.token
    });
};

// Xóa tài khoản sinh viên
export const deleteAccount = async (req: Request,res: Response): Promise<void> =>{
    const id: number = parseInt(req.params.id);
    await Account.destroy({
        where:{
            id:id
        }
    });
    res.json({
        message: `Xóa tài khoản id: ${id} thành công`
    });
};

// Xem chi tiết thành tích sinh viên
export const getResultList = async (req: Request,res: Response): Promise<void> =>{
    const resultList = await AccountService.detailResultList();
    res.json(resultList);
};