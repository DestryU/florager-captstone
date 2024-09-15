import {z} from "zod";

export const PlantSchema = z.object({
    plantId: z.string({
        required_error: 'Plant ID is required'})
        .uuid({message: 'Please provide a valid plant Id'}),

    plantScientificName: z.string()
        .trim()
        .min(1, {message: 'Please provide a valid plant scientific name (min 1 character'})
        .max(128, {message: 'Please provide a valid scientific name (max 128 character'}),

    plantCommonNames: z.string({

        required_error: 'Plant common name required'})
        .min(1, {message: 'Please provide a valid plant common name (min 1 character'})
        .max(128, {message: 'Please provide a valid plant common name (max 128 characters'})
        .array()
        .nullable(),

    plantImageUrl: z.string({
        required_error: 'Plant image url is required'})
        .max(218, {message: 'Plant image url is too long'})
        .nullable(),

    plantReferenceUrl: z.string({
        required_error: 'Plant reference url is required'})
        .max(218, {message: 'Plant reference url is too long'})

})

export type Plant = z.infer<typeof PlantSchema>

