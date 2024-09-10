import { sql } from '../../utils/database.utils'
import {PrivateProfile} from '../profile/profile.model'

/**
 * Selects a profile from the profile table by profileEmail
 * @param profileEmail
 * @returns Profile or null if no profile was found
 */
export async function selectPrivateProfileByProfileEmail(profileEmail: string): Promise<Profile | null> {
    const result = <PrivateProfile[]>await sql `SELECT profile_id, profile_user_name, profile_hash, profile_activation_token, profile_email, profile_image_url, profile_pronouns FROM profile WHERE profile_email = ${profileEmail}`
    return result?.length === 1 ? result[0] : null
}