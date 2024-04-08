import { Response, Request } from "express";
import * as ExamService from "../../services/client/exam-service";

export const getListExam = async (req: Request, res: Response) : Promise<void> => {
    const examList = await ExamService.findStudentExam(req);
    res.json(examList);
} 

export const getExamQuestion = async (req: Request, res: Response) : Promise<void> =>{
    const exams = await ExamService.findQuestionExam(req);
    res.json(exams);
};

export const postAnswerQuestion = async (req: Request, res: Response) : Promise<void> =>{
    const result = await ExamService.submitQuestion(req);
    res.json(result);
}