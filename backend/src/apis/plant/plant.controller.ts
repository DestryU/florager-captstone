import { Request, Response } from 'express';
import { Status } from '../../utils/interfaces/Status'
import {Plant, PlantSchema, insertPlant} from './plant.model'
import { zodErrorResponse } from '../../utils/response.utils'

export async function postPlantController( request: Request, response: Response ) : Promise<Response | undefined> {
    try {
        const validationResult = PlantSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {plantScientificName, plantCommonName, plantImageUrl} = validationResult.data

        const plant: Plant = {
            plantId: '',
            plantScientificName,
            plantCommonName,
            plantImageUrl
        }

        await insertPlant(plant)

        const status: Status = {
            status: 200,
            message: 'Plant successfully created.',
            data: null
        }

        return response.json(status)

    } catch (error: any) {
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        }

        return response.json(status)
    }
}

