import {object, string, TypeOf, number} from "zod";

export const addBlockchainSchema = object({
    body: object({
        blockchainId: number({
            required_error: "blockchain id is required please fill out the field name"
        }),
        name: string({
            required_error: "blockchain name is required please fill out the field password"
        }),
        imageUrl: string({
            required_error: "Blockchain Image URL is required please fill out the field email"
        })
    })
})

export type addBlockchainInput = TypeOf<typeof addBlockchainSchema>