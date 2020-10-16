import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import route from "./routers/MainRouter";

import * as db  from "./config/db/db";

import * as authMiddlewares from "./middlewares/auth.middleware";

import * as swaggerUi  from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
 
export class Express {
    public app: express.Express;
    private port: number;

    constructor() {
        this.app = express();
        this.setupMongo();
        this.setupMiddleware();
        this.setupRoutes();
        this.swaggerSetup();
        this.setUpServer();
    }

    private swaggerSetup() {
        this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
        this.port = 3000;
        this.app.listen(this.port, () => {console.log('Server listening on port', this.port)});
    }
}

export default new Express().app;