import {Request, Response} from 'express';
import {zodErrorResponse} from "../../utils/response.utils";
import {PrivateProfile, PublicProfileSchema, updateProfile} from "./profile.model";
import {Status} from "../../utils/interfaces/Status";



export async function getPublicProfileByProfileIdController(request:Request, response: Response) : Promise<Response<Status>> {
    try {
        const validationResult = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {profileId} = validationResult.data

        const data = await selectPublicProfileByProfileIdControler(profileId)

        return response.json({status: 200, message: null, data})
    } catch (error: unknown) {
        console.error(error)

        return response.json({status: 500, message: "internal server error", data: null})
    }
}


export async function getPublicProfileByIdController(request:Request, response: Response) : Promise<Response<Status>> {
 try {
     const validationResult = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

     if (!validationResult.success) {
         return zodErrorResponse(response, validationResult.error)
     }

     const {profileUserName} = validationResult.data

     const data = await selectPublicProfileByProfileName(profileUserName)
     return response.json({status: 200, message: null, data})

 } catch (error: unknown) {
     return response.json({status: 500, message: "internal server error", data: null})
 }
 }

 export async function putProfileController(request:Request, response: Response) : Promise<Response<Status>> {
    try{
        const validationResultForRequestBody =PublicProfileSchema.safeParse(request.body)
        if(!validationResultForRequestBody.success) {
          return zodErrorResponse(response, validationResultForRequestBody.error)
        }
        const validationResultForParams = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        if (!validationResultForParams.success) {
            return zodErrorResponse(response, validationResultForParams.error)
        }

        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId
        const {profileId} = validationResultForParams.data

        if (profileIdFromSession !== profileId) {
            return response.json({status: 400, message: "you cannot update a profile that is not yours", data:null})
        }

        const {profileId, profileUserName, profileImageUrl} =validationResultForRequestBody.data
        const profile:PrivateProfile|null =await selectPrivateProfileByProfileId(profileId)

        if(profile ===null){
            return response.json({status: 400, message: "this profile does not exist", data: null})
        }
    profile.profileId = profileId
    profile.profileUserName = profileUserName
    profile.profileImageUrl = profileImageUrl
    profile.profilePronouns = profilePronouns
    profile.profileEmail = profileEmail

    await updateProfile(profile)
    return response.json({status:200, message: "profile successfully updated", data: null})

    } catch (error: unknown) {
        return response.json({status: 500, message: "internal server error", data: null})
    }
 }
