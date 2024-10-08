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

    findLat: z.coerce.number({
        required_error: "This requires a findLat",
        invalid_type_error: "Great Scott! This required a valid findLat"})
        .min(-90, {message: 'Latitude must be greater than -90 Degs'})
        .max(90, {message: 'Latitude must be less than 90 Degs'}),

    findLng: z.coerce.number({
        required_error: "This requires a findLng",
        invalid_type_error: "Tragedy! This required a valid findLng"})
        .min(-180, {message: 'Longitude must be greater than -180 Degs'})
        .max(180, {message: 'Longitude must be less than 180 Degs'}),

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
