import express from "express";
import routes  from "../routes";
import config from "config"
import cors from "cors"

const createServer = () => {
    const app = express();
    app.use(cors({
        origin:config.get('origin'),
        credentials:true,
    }));
    app.use(express.json());
    routes(app);
    return app;
}

export default createServer;