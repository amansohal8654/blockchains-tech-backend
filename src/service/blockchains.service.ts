import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import BlockchainModel, { blockchainDocument, BlockchainInput } from "../models/blockchain.model";
import tokenModel from "../models/token.model";
import axios from "axios"

export async function addBlockchain(input: BlockchainInput){
    return BlockchainModel.create(input);
}

export async function getListOFBlockchains()
{
    return BlockchainModel.find().lean();
}


export async function getBlockchainsTokens(blockchainId : number){
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