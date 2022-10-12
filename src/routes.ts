import {Express, Response, Request} from 'express';
import validateResources from './middleware/validateResources';
import {addBlockchainSchema, readTokenSchema} from './schema/blockchains.schema'
import {createBlockchainHandler, getBlockchains, getBlockchainsTokens} from "./controller/blockchain.controller"
const routes = (app: Express) => {
    app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))
    app.get("/getBlockchains", () => getBlockchains);
    app.post("/addBlockchain", validateResources(addBlockchainSchema), createBlockchainHandler);
    app.get("/getBlockchainsToken:/blockchainId",  [validateResources(readTokenSchema)],  getBlockchainsTokens)
    app.get("/getBlockchainsToken:/blockchainId",  [validateResources(readTokenSchema)], () => {})
}

export default routes;