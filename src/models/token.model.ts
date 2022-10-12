import mongoose from "mongoose";

type tokenInput = { 
    blockchainId: number,
    address : string,
    decimals : number 
    logoURI : string 
    name: string 
    symbol: string 
    tags: string[] 
}
export interface tokenDocument extends tokenInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const tokenSchema = new mongoose.Schema({
    blockchainId: {type: "number" },
    address: {type: "string" },
    decimals: {type: "number" },
    logoURI: {type: "string" },
    name: {type: "string" },
    symbol: {type: "string" },
    tags: {type: [String], default: undefined},
    },
    {
        timestamps: true,
    }
);

const tokenModel = mongoose.model<tokenDocument>("tokens", tokenSchema);

export default tokenModel;