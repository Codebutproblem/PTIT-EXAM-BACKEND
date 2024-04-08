import { QueryTypes, where } from "sequelize";
import sequelize from "../../../config/database";
import { Request } from "express";
import Question from "../../models/question-model";
interface IQueryObject{
    keyword: string,
    status?: string
}

export const findStudentExam = async (req: Request) =>{
    const account = req["account"];

    const queryObject: IQueryObject = {
        keyword: ""
    }
    if(req.query.keyword){
        queryObject.keyword = req.query.keyword.toString();
    }

    if(req.query.status){
        queryObject.status = req.query.status.toString();
    }

    const examList = await sequelize.query(`
        select exam.name, account_exam.result, exam.status from account
        inner join account_exam on account.id = account_exam.account_id
        inner join exam on account_exam.exam_id = exam.id
        where account.id = ${account.id} and exam.name like '%${queryObject.keyword}%' ${queryObject.status ? `and exam.status = '${queryObject.status}'`: ''}
    `,{ 
        type: QueryTypes.SELECT,
        raw: true
    });
    return examList;
};

export const findQuestionExam = async (req: Request) =>{
    const account = req["account"];
    const id: string = req.params.id;
    const questions = await sequelize.query(`
        select question.id, question.question, question.answer_a, question.answer_b, question.answer_c, question.answer_d from account
        inner join account_exam on account.id = account_exam.account_id
        inner join exam on account_exam.exam_id = exam.id
        inner join exam_question on exam.id = exam_question.exam_id
        inner join question on exam_question.question_id = question.id
        where account.id = ${account.id} and exam.id = ${id}
    `,{ 
        type: QueryTypes.SELECT,
        raw: true
    });
    return questions;
};

export const submitQuestion = async (req: Request) => {
    const submitQuestion = req.body;
    const questions = await sequelize.query(`
        select question.id, question.question, question.answer_a, question.answer_b, question.answer_c, question.answer_d, question.correct_answer from question
        inner join exam_question on question.id = exam_question.question_id
        where exam_question.exam_id = ${req.params.id}
    `,{ 
        type: QueryTypes.SELECT,
        raw: true
    });

    let count = 0;
    for(let key in submitQuestion){
        const correct = questions.find(question => question.id == parseInt(key) && question.correct_answer == submitQuestion[key]);
        if(correct){
            count++;
        }
    }
    return {
        correct: count,
        total: questions.length,
        correct_answer: questions
    };
};