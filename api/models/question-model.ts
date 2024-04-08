import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Question = sequelize.define("Question",{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    answer_a : DataTypes.TEXT,
    answer_b : DataTypes.TEXT,
    answer_c : DataTypes.TEXT,
    answer_d : DataTypes.TEXT,
    correct_answer: DataTypes.STRING(10)
},{
    tableName: "question",
    timestamps: false
});

export default Question;