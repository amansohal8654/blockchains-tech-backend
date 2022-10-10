import {Express, Response, Request} from 'express';

const routes = (app: Express) => {
    app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))
    app.get("/getBlockchains", () => {});
    app.post("/addBlockchain", () => {});
    app.get("/getBlockchainsToken:/blockchainId", () => {})
    app.get("/getBlockchainsToken:/blockchainId:/tokenId", () => {})
}

export default routes;