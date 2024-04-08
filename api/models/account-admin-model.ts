import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { generateRandomString } from "../../helpers/generate-random";

const AccountAdmin = sequelize.define("AccountAdmin", {
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
    tableName: "account_admin",
    timestamps: false
});

export default AccountAdmin;