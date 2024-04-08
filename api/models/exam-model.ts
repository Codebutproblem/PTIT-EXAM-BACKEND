import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Exam = sequelize.define("Exam",{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING(255),
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    status: DataTypes.STRING(25),
},{
    tableName: "exam",
    timestamps: false
});

export default Exam;