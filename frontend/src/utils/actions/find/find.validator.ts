import {z} from 'zod'

export const FindSchema = z.object ({
    findId: z.string({
        required_error: "This requires a findId"})
        .uuid({message: "Please provide a valid uuid for findId"})
        .nullable(),

    findProfileId: z.string({
        required_error: "This requires a findProfileId"})
        .uuid({message: "Please provide a valid uuid for findProfileId"}),

    findPlantId: z.string({
        required_error: "This requires a findPlantId"})
        .uuid({message: "Please provide a valid uuid for findPlantId"}),

    findImageUrl: z.string({
        required_error: "This requires a findImageUrl"})
        .trim()
        .url({message: 'Please provide a valid URL for findImageUrl'})
        .max(128, {message: "This image URL is too long"}),

    findLat: z.string({
        required_error: "This requires a findLat"})
        .min(1, {message: 'optional'})
        .max(10, {message: 'optional (max 10 characters)'}),

    findLng: z.string({
        required_error: "This requires a findLng"})
        .min(1, {message: 'optional'})
        .max(10, {message: 'optional (max 10 characters)'}),

    findDateTime: z.coerce.date({
        required_error: "This requires a findDateTime"})
        .nullable()
})

export type Find = z.infer<typeof FindSchema>