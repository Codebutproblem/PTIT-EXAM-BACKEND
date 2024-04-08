import { Response, Request } from "express";
import Exam from "../../models/exam-model";
import * as ExamService from "../../services/admin/exam-service";
interface IExam {
    name: string
    time_start: Date,
    time_end: Date,
    status: string
};
// Lấy dữ liệu danh sách bài kiểm tra
export const getExamList = async (req: Request, res: Response): Promise<void> => {
    const exams = await ExamService.findExamList(req.query);
    res.json(exams);
};
// Tạo bài kiểm tra
export const createExam = async (req: Request, res: Response): Promise<void> => {
    const examObject: IExam = {
        name: req.body.name,
        time_start: new Date(req.body.time_start),
        time_end: new Date(req.body.time_end),
        status: req.body.status
    };

    const exam = await Exam.create(examObject);

    res.json({
        message: "Tạo bài kiểm tra thành công",
        exam: exam
    });
};
// Sửa thông tin bài kiểm tra
export const editExam = async (req: Request, res: Response): Promise<void> =>{
    const id: string = req.params.id;

    await Exam.update(req.body,{
        where: {
            id: id
        }
    });

    res.json({
        message: "Cập nhật thành công",
    });
};
// Xóa bài kiểm tra
export const deleteExam = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;

    await Exam.destroy({
        where:{
            id: id
        }
    });
    res.json({
        message: `Xóa thành công tài khoản có id: ${id}`
    });
};
// Xem chi tiết bài kiểm tra
export const getExamDetailList = async (req: Request, res: Response): Promise<void> => {
    const exam = await ExamService.findExamDetail();
    res.json(exam);
};