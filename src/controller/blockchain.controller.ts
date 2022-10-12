import { Request, Response } from "express";
import { addBlockchainInput, readTokenInput } from "../schema/blockchains.schema";
import logger from "../utils/logger";
import {addBlockchain, getListOFBlockchains, getListOFTokens} from "../service/blockchains.service"

export async function createBlockchainHandler(
  req: Request<{}, {}, addBlockchainInput["body"]>,
  res: Response
) {
  try {
    const body = req.body
    const blockchain = await addBlockchain({blockchainId : body.id, name : body.name, imageUrl : body.imageUrl});
    if(!blockchain) res.send("Blockchain already exists");
    return res.send(blockchain);
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}

export async function getBlockchains(req: Request, res: Response){
    try {
        const blockchains = await getListOFBlockchains();
        return res.send(blockchains);
    } catch (err: any) {
        logger.error(err);
    }
}

export async function getBlockchainsTokens(req: Request<readTokenInput["params"]>, res: Response){
    const blockchainId = req.params.blockchainId;
    const blockchains = await getListOFTokens({blockchainId});

    if(!blockchains) return res.sendStatus(404);

    return res.send(blockchains);
}