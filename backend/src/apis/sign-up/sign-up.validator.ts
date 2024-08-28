import {z} from 'zod'
import {PrivateProfileSchema} from "../profile/profile.model";

export const SignupProfileSchema = PrivateProfileSchema
    .omit({profileId: true, profileHash: true, profileActivationToken: true, profileImageUrl: true, profilePronouns: true})
    .extend({
        profilePasswordConfirm: z.string({required_error: "Profile password confirmation is required", invalid_type_error: "Profile password confirmation must be a string"})
            .min( 8, {message: 'Please provide a valid password (min 8 characters)'})
            .max(32 , { message: 'Please provide a valid password (max 32 characters)'}),
        profilePassword: z.string({required_error: "Profile password is required", invalid_type_error: "Profile password must be a string"})
            .min(8, {message: 'please provide a valid password (min 8 characters)'})
            .max(32, {message: 'please provide a valid password (max 8 characters)'})
    })

    .refine((data: any) => data.profilePassword === data.profilePasswordConfirm, {
        message: 'password do not match'
    })