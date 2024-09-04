import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {Find, FindSchema, insertFind} from './find.model'
import {PublicProfile} from "../profile/profile.model";


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