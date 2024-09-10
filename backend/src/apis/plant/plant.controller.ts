import { Request, Response } from 'express';
import { Status } from '../../utils/interfaces/Status'
import {Plant, PlantSchema, insertPlant, selectPlantByPlantId, selectPlantByPlantCommonName, selectPlantByPlantScientificName} from './plant.model'
import { zodErrorResponse } from '../../utils/response.utils'
import {z} from 'zod'

export async function postPlantController( request: Request, response: Response ) : Promise<Response | undefined> {
    try {
        const validationResult = PlantSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {plantScientificName, plantCommonNames, plantImageUrl} = validationResult.data

        const plant: Plant = {
            plantId: '',
            plantScientificName,
            plantCommonNames: [],
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


export async function getPlantByPlantIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request threadId with the uuid schema
        const validationResult = z.string({
            required_error: 'Plant ID is required',
            invalid_type_error: 'Plant ID must be a string'
        }).uuid({message: 'Please provide a valid plantId'}).safeParse(request.params.plantId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const plantId = validationResult.data
        const data = await selectPlantByPlantId(plantId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPlantByPlantCommonNameController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.string({required_error:'Plant common name is required', invalid_type_error: 'Plant common name must be a string'}).safeParse(request.params.plantCommonName)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const plantCommonName = validationResult.data
        const data = await selectPlantByPlantCommonName(plantCommonName)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}


export async function getPlantByPlantScientificNameController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.string({required_error:'Plant scientific name is required', invalid_type_error: 'Plant scientific name must be a string'}).safeParse(request.params.plantScientificName)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const plantScientificName = validationResult.data
        const data = await selectPlantByPlantScientificName(plantScientificName)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

