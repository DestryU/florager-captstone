import {Request, Response} from 'express';
import {zodErrorResponse} from "../../utils/response.utils";
import {
    PrivateProfile, PublicProfile,
    PublicProfileSchema,
    selectPublicProfileByProfileId,
    selectPublicProfileByProfileUserName,
    updateProfile
} from "./profile.model";
import {Status} from "../../utils/interfaces/Status";



export async function getPublicProfileByProfileIdController(request:Request, response: Response) : Promise<Response<Status>> {
    try {
        const validationResult = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {profileId} = validationResult.data

        const data = await selectPublicProfileByProfileId(profileId)

        return response.json({status: 200, message: null, data})
    } catch (error: unknown) {
        console.error(error)

        return response.json({status: 500, message: "internal server error", data: null})
    }
}


// export async function getPublicProfileByProfileUserNameController(request:Request, response: Response) : Promise<Response<Status>> {
//  try {
//      const validationResult = PublicProfileSchema.pick({profileUserName: true}).safeParse(request.params)
//
//      if (!validationResult.success) {
//          return zodErrorResponse(response, validationResult.error)
//      }
//
//      const {profileUserName} = validationResult.data
//
//      const data = await selectPublicProfileByProfileUserName(profileUserName)
//      return response.json({status: 200, message: null, data})
//
//  } catch (error: unknown) {
//      return response.json({status: 500, message: "internal server error", data: null})
//  }
//  }
// export async function updateProfileController(request:Request, response: Response) : Promise<Response<Status>> {
//     try {
//         const validationResult = PublicProfileSchema.pick({updateProfile: true}).safeParse(request.params)
//
//         if (!validationResult.success) {
//             return zodErrorResponse(response, validationResult.error)
//         }
//
//         const updateProfile = validationResult.data
//
//         const data = await selectPublicProfileByProfileEmail(updateProfile)
//         return response.json({status: 200, message: null, data})
//
//     } catch (error: unknown) {
//         return response.json({status: 500, message: "internal server error", data: null})
//     }
// }

 // export async function putProfileController(request:Request, response: Response) : Promise<Response<Status>> {
 //    try{
 //        const validationResultForRequestBody =PublicProfileSchema.safeParse(request.body)
 //        if(!validationResultForRequestBody.success) {
 //          return zodErrorResponse(response, validationResultForRequestBody.error)
 //        }
 //        const validationResultForParams = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)
 //
 //        if (!validationResultForParams.success) {
 //            return zodErrorResponse(response, validationResultForParams.error)
 //        }
 //
 //        const profileFromSession = request.session?.profile-first-take
 //        const profileIdFromSession = profileFromSession?.profileId
 //        const {profileId} = validationResultForParams.data
 //
 //        if (profileIdFromSession !== profileId) {
 //            return response.json({status: 400, message: "you cannot update a profile-first-take that is not yours", data:null})
 //        }
 //
 //        const {updateProfile, profileUserName, profileImageUrl} =validationResultForRequestBody.data
 //        const profile-first-take:PrivateProfile|null =await selectPrivateProfileByProfileId(profileId)
 //
 //        if(profile-first-take ===null){
 //            return response.json({status: 400, message: "this profile-first-take does not exist", data: null})
 //        }
 //    profile-first-take.profileId = profileId
 //    profile-first-take.profileUserName = profileUserName
 //    profile-first-take.profileImageUrl = profileImageUrl
 //    profile-first-take.profilePronouns = profilePronouns
 //    profile-first-take.profileEmail = profileEmail
 //
 //    await updateProfile(profile-first-take)
 //    return response.json({status:200, message: "profile-first-take successfully updated", data: null})
 //
 //    } catch (error: unknown) {
 //        return response.json({status: 500, message: "internal server error", data: null})
 //    }
 // }
export async function putProfileController(request: Request, response: Response): Promise<Response<Status>> {
    try {



        const validationResultForRequestBody = PublicProfileSchema.safeParse(request.body)


        if(!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }


        const validationResultForRequestParams = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)


        if(!validationResultForRequestParams.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }


        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId


        const {profileId} = validationResultForRequestParams.data

        if (profileIdFromSession !== profileId) {
            return response.json({status: 400, message: "you cannot update a profile-first-take that is not yours ahahahhahah", data: null})
        }


        const {profilePronouns, profileImageUrl, profileUserName} = validationResultForRequestBody.data


        const profile: PublicProfile|null = await selectPublicProfileByProfileId(profileId)


        //if the profile-first-take does not exist, return a preformatted response to the client
        if(profile === null) {
            return response.json({status: 400, message: "profile-first-take does not exist", data: null})
        }


        profile.profileImageUrl = profileImageUrl
        profile.profileUserName = profileUserName
        profile.profilePronouns = profilePronouns

        //update the profile-first-take in the database
        await updateProfile(profile)

        //return a response to the client with a success message
        return response.json({status: 200, message: "profile-first-take successfully updated", data: null})


    } catch (error: unknown) {
        // if an error occurs, return a preformatted response to the client
        return response.json({status: 500,message: "internal server error", data: null})
    }
}