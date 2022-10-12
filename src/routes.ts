import {Express, Response, Request} from 'express';
import validateResources from './middleware/validateResources';
import {addBlockchainSchema} from './schema/blockchains.schema'
const routes = (app: Express) => {
    app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))
    app.get("/getBlockchains", () => {});
    app.post("/addBlockchain", validateResources(addBlockchainSchema), () => {});
    app.get("/getBlockchainsToken:/blockchainId", () => {})
    app.get("/getBlockchainsToken:/blockchainId", () => {})
}

export default routes;