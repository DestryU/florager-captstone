import {z} from "zod";
import {sql} from '../../utils/database.utils'

export const PlantSchema = z.object({
    plantId: z.string({
        required_error: 'Plant ID is required',
        invalid_type_error: 'Please provide a valid plant Id'})
        .uuid({message: 'Please provide a valid plant Id'}),

    plantScientificName: z.string()
        .trim()
        .min(1, {message: 'Please provide a valid plant scientific name (min 1 character'})
        .max(128, {message: 'Please provide a valid scientific name (max 128 character'}),

    plantCommonNames: z.string({
        required_error: 'Plant common name required',
        invalid_type_error: 'Please provide a valid plant common name'})
        .min(1, {message: 'Please provide a valid plant common name (min 1 character'})
        .max(128, {message: 'Please provide a valid plant common name (max 128 characters'})
        .array(),

    plantImageUrl: z.string({
        required_error: 'Plant image url is required',
        invalid_type_error: 'Please provide a valid plant image url'})
        .max(218, {message: 'Plant image url is too long'})
        .nullable()
})

export type Plant = z.infer<typeof PlantSchema>

export async function insertPlant(plant: Plant): Promise<string> {
    const {plantScientificName, plantCommonNames, plantImageUrl} = plant
    await sql`INSERT INTO plant(plant_id, plant_scientific_name, plant_common_names, plant_image_url) 
    VALUES (gen_random_uuid(), ${plantScientificName}, ${plantCommonNames}, ${plantImageUrl})`
    return 'Plant successfully created'
}

export async function selectPlantByPlantId (plantId: string) : Promise<Plant|null> {
    const rowList = await sql`SELECT plant_id, plant_scientific_name, plant_common_names, plant_image_url FROM plant WHERE plant_id = ${plantId}`
    const result = PlantSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result [0] : null
}


export async function selectPlantByPlantCommonName (plantCommonName: string) : Promise<Plant[]> {
    const formattedPlantCommonName = `%${plantCommonName}%`
    const rowList = await sql`SELECT plant_id, plant_scientific_name, plant_common_names, plant_image_url FROM plant WHERE plant_common_name like ${formattedPlantCommonName}`
    const result = PlantSchema.array().max(1).parse(rowList)
    return result

}

export async function selectPlantByPlantScientificName (plantScientificName: string) : Promise<Plant[]> {
    const formattedPlantScientificName = `%${plantScientificName}%`
    const rowList = await sql`SELECT plant_id, plant_scientific_name, plant_common_names, plant_image_url FROM plant WHERE plant_scientific_name like ${formattedPlantScientificName}`
    const result = PlantSchema.array().max(1).parse(rowList)
    return result

}