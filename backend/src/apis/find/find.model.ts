import {z} from "zod";
import {sql} from '../../utils/database.utils'

export const FindSchema = z.object ({
    findId: z.string({
        required_error: "This requires a findId",
        invalid_type_error: "Oops! This required a valid findId"})
        .uuid({message: "Please provide a valid uuid for findId"})
        .nullable(),

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

    findLat: z.number({
        required_error: "This requires a findLat"})
        .min(-90, {message: 'latitude must be -90 or greater'})
        .max(90, {message: 'latitude must be between -90 and 90'}),

    findLng: z.number({
        required_error: "This requires a findLng"})
        .min(-180, {message: 'longitude must be -180 or greater'})
        .max(180, {message: 'longitude must be between -180 and 180'}),

    findDateTime: z.date({
        required_error: "This requires a findDateTime",
        invalid_type_error: "Shucks! This required a valid findDateTime"})
        .nullable()
})


export type Find = z.infer<typeof FindSchema>


export async function insertFind(find: Find): Promise<string> {
    const {findProfileId, findPlantId, findImageUrl, findLat, findLng} = find

    await sql`INSERT INTO find(find_id, find_profile_id, find_plant_id, find_image_url, find_lat, find_lng, find_date_time)
    VALUES(gen_random_uuid(), ${findProfileId}, ${findPlantId}, ${findImageUrl}, ${findLat}, ${findLng}, now())`

    return "Plant was successfully found :)"
}

export async function selectFindByPrimaryKey(findId: string): Promise<Find | null> {

    const rowList = await sql`SELECT find_id, find_profile_id, find_plant_id, find_image_url, find_lat, find_lng, find_date_time
    FROM find
    WHERE find_id = ${findId}`

    const result = FindSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}

export async function selectFindByPlantId(findPlantId: string): Promise<Find[] | null> {
    const rowList = await sql`SELECT find_id, find_profile_id, find_plant_id, find_image_url, find_lat, find_lng, find_date_time
    FROM find
    WHERE find_plant_id = ${findPlantId}`

    return FindSchema.array().parse(rowList)
}

export async function selectFindByProfileId(findProfileId: string): Promise<Find[] | null> {
    const rowList = await sql`SELECT find_id, find_profile_id, find_plant_id, find_image_url, find_lat, find_lng, find_date_time
    FROM find
    WHERE find_profile_id = ${findProfileId}`

    return FindSchema.array().parse(rowList)
}

export async function selectFindByRecent(): Promise<Find[] | null> {
    const rowList = await sql`SELECT find_id, find_profile_id, find_plant_id, find_image_url, find_lat, find_lng, find_date_time
    FROM find
    ORDER BY find_date_time
    LIMIT 25`

    return FindSchema.array().max(25).parse(rowList)

}
