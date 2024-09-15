import {number, z} from "zod";
import {sql} from '../../utils/database.utils'

export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'})
        .uuid({message: 'please provide a valid profileId'}),

    profileUserName: z.string({required_error: 'profile user name is required'})
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

    profilePronouns: z.string({required_error: 'profilePronouns is required'})
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
    return 'Profile successfully created'
}

export async function selectPrivateProfileByProfileActivationToken (profileActivationToken: string) : Promise<PrivateProfile|null> {
    const rowList = await sql`SELECT profile_id, profile_user_name, profile_hash, profile_activation_token, profile_email, profile_image_url, profile_pronouns FROM profile WHERE profile_activation_token = ${profileActivationToken}`
    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result [0] : null
}

export const PublicProfileSchema = PrivateProfileSchema.omit({profileHash: true, profileActivationToken: true, profileEmail: true})
export type PublicProfile = z.infer<typeof PublicProfileSchema>

export async function updateProfile (profile: PublicProfile) : Promise<string> {
    const {profileId, profileUserName, profileImageUrl, profilePronouns } = profile
    await sql`UPDATE profile SET profile_user_name = ${profileUserName}, profile_image_url = ${profileImageUrl}, profile_pronouns = ${profilePronouns} WHERE profile_id = ${profileId}`
    return 'Profile successfully updated'
}

export async function selectPrivateProfileByProfileEmail (profileEmail: string) : Promise<PrivateProfile|null> {
    const rowList = await sql`SELECT profile_id, profile_user_name, profile_hash, profile_activation_token, profile_email, profile_image_url, profile_pronouns FROM profile WHERE profile_email = ${profileEmail}`
    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result [0] : null
}


export async function selectPublicProfileByProfileId (profileId: string): Promise<PublicProfile|null> {

    // create a prepared statement that selects the profile-first-take by profileId and execute the statement
    const rowList = await sql`SELECT profile_id, profile_user_name, profile_image_url, profile_pronouns FROM profile WHERE profile_id = ${profileId}`
    const result =PublicProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result [0] : null
}
export async function selectPublicProfileByProfileUserName(profileUserName: string): Promise<PublicProfile|null> {

    // create a prepared statement that selects the profile-first-take by profileId and execute the statement
    const rowList = await sql`SELECT profile_id, profile_user_name, profile_image_url, profile_pronouns FROM profile WHERE profile_user_name = ${profileUserName}`
    const result =PublicProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result [0] : null
}
