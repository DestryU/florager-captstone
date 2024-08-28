import {number, z} from "zod";
import {sql} from '../../utils/database.utils'

export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'})
        .uuid({message: 'please provide a valid profileId'}),

    profileUserName: z.string()
        .trim()
        .min(1, {message: 'please provide a valid username (min 1 character'})
        .max(128, {message: 'please provide a valid username (max 128 character'}),

    profileHash: z.string({
        required_error: 'profileHash is required',
        invalid_type_error: 'Please provide a valid profileHash'})
        .length(97, {message: 'profile hash must be 97 characters'}),

    profileActivationToken: z.string({
        required_error: 'profileActivationToken is required',
        invalid_type_error: 'Please provide a valid profileActivationToken'})
        .length(32, {message: 'profile activation token is too long'})
        .nullable(),

    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: 'Please provide a valid profile email'})
        .email({message: 'please provide a valid email'})
        .max(128, {message: 'profile email is too long'}),

    profileImageUrl: z.string({
        required_error: 'profileImageUrl is required',
        invalid_type_error: 'Please provide a valid profileImageUrl' })
        .trim()
        .url({message: 'please provide a valid profile image url'})
        .max(255, {message: 'profile image url is too long'})
        .nullable(),

    profilePronouns: z.string()
        .trim()
        .min(1, {message: 'optional'})
        .max(10, {message: 'optional (max 10 characters)'})
        .nullable()
})

export type PrivateProfile = z.infer<typeof PrivateProfileSchema>

export async function insertProfile(profile: PrivateProfile): Promise<string> {
    const {profileUserName, profileActivationToken, profileEmail, profileHash, profileImageUrl, profilePronouns} = profile
    await sql`INSERT INTO profile(profile_id, profile_user_name, profile_hash, profile_activation_token, profile_email, profile_image_url, profile_pronouns) 
    VALUES (gen_random_uuid(), ${profileUserName}, ${profileHash}, ${profileActivationToken}, ${profileEmail}, ${profileImageUrl}, ${profilePronouns})`
    return 'Profile Successfully Created'
}

