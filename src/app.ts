import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";
import {getBlockchainsTokens} from "./service/blockchains.service"
const port = config.get<number>("port");
const app = createServer();
getBlockchainsTokens(1);
app.listen(port, async() => {
    logger.info(`App is listening on port ${port}`);
    await connect();
});