import { Op, QueryTypes } from "sequelize";
import sequelize from "../../../config/database";
import Account from "../../models/account-model";

// Kết quả chi tiết từng môn của sinh viên
export const detailResultList = async () => {
    const resultList = await sequelize.query(`
        SELECT account.id, account.username, exam.name , account_exam.result FROM account
        LEFT JOIN account_exam on account.id = account_exam.account_id
        LEFT JOIN exam on account_exam.exam_id = exam.id
    `, {
        type: QueryTypes.SELECT,
        raw: true
    });
    return resultList;
};

// Tìm kiếm tài khoản sinh viên
export const filterAccount = async (query: any) => {
    let keyword = "";
    if (query.keyword) {
        keyword = query.keyword.toString();
    }
    const accounts = await Account.findAll({
        attributes: { exclude: ['password'] },
        raw: true,
        where: {
            [Op.and]: [
                { username: { [Op.like]: `%${keyword}%` } }
            ]
        }
    });
    return accounts;
};