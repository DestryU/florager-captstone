import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {
    Find,
    FindSchema,
    insertFind,
    selectFindByPlantId,
    selectFindByPrimaryKey,
    selectFindByProfileId, selectFindByRecent
} from './find.model'
import {PublicProfile} from "../profile/profile.model";
import {z} from "zod";


export async function postFindController(request: Request, response: Response): Promise<Response> {
    try {


        const validationResult = FindSchema.safeParse(request.body)



        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        let {findId, findPlantId, findImageUrl, findLat, findLng} = validationResult.data
        const profile: PublicProfile = request.session.profile as PublicProfile
        const findProfileId: string = profile.profileId as string
        const find: Find = {
            findId,
            findProfileId,
            findPlantId,
            findImageUrl,
            findLat,
            findLng,
            findDateTime: null
        }


        await insertFind(find)


        const status: Status = {
            status: 200,
            message: 'Successfully posted your foliage Find!',
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
    }}


export async function getFindByPrimaryKeyController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({required_error: 'Missing Required',invalid_type_error: 'Invalid Request'})
            .uuid({message: 'This is not a valid Find ID'})
            .safeParse(request.params.findId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const findId = validationResult.data
        const data = await selectFindByPrimaryKey(findId)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return response.json({status: 500, data: null, message: ""})

    }
}


export async function getFindByPlantIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({message:"We got this far"}).safeParse(request.params.findPlantId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const findPlantId = validationResult.data
        const data = await selectFindByPlantId(findPlantId)

        return response.json({status: 200, data, message: null})

    } catch (error) {
        return response.json({status: 500, data: null, message: null})
    }
}


export async function getFindByProfileIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({message:"We got this far"}).safeParse(request.params.findProfileId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const findProfileId = validationResult.data
        const data = await selectFindByProfileId(findProfileId ?? "")

        return response.json({status: 200, data, message: null})

    } catch (error) {
        return response.json({status: 500, data: null, message: null})
    }
}


export async function getFindByRecentController(request: Request, response:Response): Promise<Response<Status>> {
    try {
        const data = await selectFindByRecent()

        return response.json({status:200, data, message: null})

    } catch (error) {
        return response.json({status:500, data: null, message: null})
    }
}




