import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import BlockchainModel, { blockchainDocument, BlockchainInput } from "../models/blockchain.model";
import tokenModel, {tokenDocument} from "../models/token.model";
import axios from "axios"

export async function addBlockchain(input: BlockchainInput){
    const blockchain = BlockchainModel.create(input);
    if(blockchain){
        getBlockchainsTokensAndSave(input.blockchainId)
        return blockchain;
    }
}

export async function getListOFBlockchains()
{
    return BlockchainModel.find().lean();
}

export async function getListOFTokens(
    query: FilterQuery<tokenDocument>,
    options: QueryOptions = {lean: true})
{
    return tokenModel.find(query, {}, options)
}

export async function getBlockchainsTokensAndSave(blockchainId : number){
    try{
        const tokenData = await axios.get(`https://api.1inch.io/v4.0/${blockchainId}/tokens`)
        const tokens =  Object.entries(tokenData?.data?.tokens).map(([key, token] : any) => {
           return  {blockchainId, ...token}
        });
        tokenModel.insertMany(tokens).then(function(){
            console.log("Data inserted")  // Success
        }).catch(function(error){
            console.log(error)      // Failure
        });;
    } catch(err){
        console.log(err)
    }
}