const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'exam_ptit',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

export default sequelize;