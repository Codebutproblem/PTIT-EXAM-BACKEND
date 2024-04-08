import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { generateRandomString } from "../../helpers/generate-random";

const Account = sequelize.define("Account", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(25),
        defaultValue: generateRandomString(20),
        allowNull: false
    }
},{
    tableName: "account",
    timestamps: false
});

export default Account;