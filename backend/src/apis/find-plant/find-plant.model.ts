import {number, z} from "zod";
import {sql} from '../../utils/database.utils'

export const FindPlantSchema = z.object ({
    findId: z.string({
        required_error: "This requires a findId",
        invalid_type_error: "Oops! This required a valid findId"})
        .uuid({message: "Please provide a valid uuid for findId"}),

    findProfileId: z.string({
        required_error: "This requires a findProfileId",
        invalid_type_error: "Oh no! This required a valid findProfileId"})
        .uuid({message: "Please provide a valid uuid for findProfileId"}),

    findPlantId: z.string({
        required_error: "This requires a findPlantId",
        invalid_type_error: "Uh-oh! This required a valid findPlantId"})
        .uuid({message: "Please provide a valid uuid for findPlantId"}),

    findImageUrl: z.string({
        required_error: "This requires a findImageUrl",
        invalid_type_error: "Whoops! This required a valid findImageUrl"})
        .trim()
        .url({message: 'Please provide a valid URL for findImageUrl'})
        .max(128, {message: "This image URL is too long"}),

    findLat: z.string({
        required_error: "This requires a findLat",
        invalid_type_error: "Great Scott! This required a valid findLat"})
        .min(1, {message: 'optional'})
        .max(10, {message: 'optional (max 10 characters)'}),

    findLng: z.string({
        required_error: "This requires a findLng",
        invalid_type_error: "Tragedy! This required a valid findLng"})
        .min(1, {message: 'optional'})
        .max(10, {message: 'optional (max 10 characters)'}),

    findDateTime: z.date({
        required_error: "This requires a findDateTime",
        invalid_type_error: "Shucks! This required a valid findDateTime"
    })
})

export type FindPlant = z.infer<typeof FindPlantScehema>

export async function insertFind(find: FindPlant): Promise<string> {
    const {findProfileId, findPlantId, findImageUrl, findLat, findLng, findDateTime} = find

    await sql`INSERT INTO find(find_id, find_profile_id, find_plant_id, find_image_url, find_lat, find_lng, find_date_time)
    VALUES(gen_random_uuid(), ${findProfileId}, ${findPlantId}, ${findImageUrl}, ${findLat}, ${findLng}, ${findDateTime})`

    return "Plant was successfully found :)"
}

