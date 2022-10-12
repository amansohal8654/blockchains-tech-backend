import { Request, Response } from "express";
import { addBlockchainInput } from "../schema/blockchains.schema";
import logger from "../utils/logger";
import {addBlockchain, getListOFBlockchains} from "../service/blockchains.service"

export async function createUserHandler(
  req: Request<{}, {}, addBlockchainInput["body"]>,
  res: Response
) {
  try {
    const blockchain = await addBlockchain(req.body);
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
