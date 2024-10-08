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

    findLat: z.number({
        required_error: "This requires a findLat"})
        .min(-90, {message: 'Latitude must be greater than -90 Degs'})
        .max(90, {message: 'Latitude must be less than 90 Degs'}),

    findLng: z.number({
        required_error: "This requires a findLng"})
        .min(-180, {message: 'Longitude must be greater than -180 Degs'})
        .max(180, {message: 'Longitude must be less than 180 Degs'}),

    findDateTime: z.coerce.date({
        required_error: "This requires a findDateTime"})
        .nullable()
})

export type Find = z.infer<typeof FindSchema>