import { QueryTypes } from "sequelize";
import sequelize from "../../../config/database"
interface IQueryObject{
    keyword: string
    status?: string
}
// Danh sách chi tiết bài thi 
export const findExamDetail = async ()=>{
    const exam = await sequelize.query(`
        SELECT exam.id, exam.name, avg(account_exam.result) as avg_result, count(exam.id) as student_number FROM exam
        INNER JOIN account_exam ON exam.id = account_exam.exam_id
        GROUP BY exam.id
    `,{ 
        type: QueryTypes.SELECT,
        raw: true
    });

    return exam;
};

// Danh sách bài thi
export const findExamList = async (query:any)=>{
    const queryObject: IQueryObject = {
        keyword: ""
    }
    if(query.keyword){
        queryObject.keyword = query.keyword;
    }

    if(query.status){
        queryObject.status = query.status;
    }
    const exams = await sequelize.query(`
        SELECT * FROM exam
        WHERE exam.name like '%${queryObject.keyword}%' ${queryObject.status ? `and status = '${queryObject.status}'` : ''}
    `,{ 
        type: QueryTypes.SELECT,
        raw: true
    });
    return exams;
}