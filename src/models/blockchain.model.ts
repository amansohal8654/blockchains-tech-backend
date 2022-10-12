import mongoose from "mongoose";

export type BlockchainInput = {
    blockchainId: number
    name: string
    imageUrl: string
}

export interface blockchainDocument extends BlockchainInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const blockchainSchema = new mongoose.Schema({
    blockchainId: {type: "number", required: true, unique: true},
    name: {type: "string", required: true, unique: true},
    imageUrl: {type: "string", required: true},
    },
    {
        timestamps: true,
    }
);

const BlockchainModel = mongoose.model<blockchainDocument>("blockchain", blockchainSchema);

export default BlockchainModel;