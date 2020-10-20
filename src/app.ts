import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import route from "./routers/index.router";

import * as db from "./config/db/db";

import * as authMiddlewares from "./middlewares/auth.middleware";

import * as swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./config/swagger/swagger";
import * as dotenv from "dotenv"


const options = {
    swaggerOptions: {
        authAction: { JWT: { name: "JWT", schema: { type: "apiKey", in: "header", name: "Authorization", description: "" }, value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RkYW5na3lAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJOZ3V5ZW4gQmEgRGFvIiwiX2lkIjoiNWY4MDA5MjkyYTgzMDU0NGI2N2JhZDM5IiwiaWF0IjoxNjAyMjI2NTE1fQ.A5Kd_iockdOoSYSSoNWhN6B7733pI6Qn2JjIPx86J0E" } }
    }
};

dotenv.config();

const port = process.env.PORT || 3000;

export class Express {

    public app: express.Express;
    constructor() {
        this.app = express();
        this.setupMongo();
        this.setupMiddleware();
        this.setupRoutes();
        this.swaggerSetup();
        this.setUpServer();
    }

    private swaggerSetup() {
        this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
    }

    private setupMongo() {
        db.connect;
    }

    private setupRoutes() {
        route(this.app);
    }

    private setupMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined')); 
        this.app.use(authMiddlewares.checkToken, authMiddlewares.protectedRoute);
    }

    private setUpServer() {
        this.app.listen(port, () => { console.log('Server listening on port', port) });
    }

}

export default new Express().app;