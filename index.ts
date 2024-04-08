import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import cors from "cors";
import sequelize from "./config/database";
import routeAdmin from "./api/routes/admin/index-route";
import routeClient from "./api/routes/client/index-route";
dotenv.config();

sequelize;
const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

routeClient(app);
routeAdmin(app);


app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});