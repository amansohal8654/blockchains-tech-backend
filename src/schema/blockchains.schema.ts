import {object, string, TypeOf, number} from "zod";

const payload = {
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
}

const params = {
    params: object({
        blockchainId: string({
            required_error: "productId is required"
        })
    })
}

export const addBlockchainSchema = object({
    ...payload,
    ...params
})

export const readTokenSchema = object({
    ...params,
})
export type addBlockchainInput = TypeOf<typeof addBlockchainSchema>

export type readTokenInput = TypeOf<typeof readTokenSchema>