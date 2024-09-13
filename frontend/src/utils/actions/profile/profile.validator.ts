import {z} from 'zod'

export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'})
        .uuid({message: 'please provide a valid profileId'}),

    profileUserName: z.string({required_error: 'profile-first-take user name is required'})
        .trim()
        .min(1, {message: 'please provide a valid username (min 1 character'})
        .max(128, {message: 'please provide a valid username (max 128 character'}),

    profileImageUrl: z.string({
        required_error: 'profileImageUrl is required',
        invalid_type_error: 'Please provide a valid profileImageUrl' })
        .trim()
        .url({message: 'please provide a valid profile-first-take image url'})
        .max(255, {message: 'profile-first-take image url is too long'})
        .nullable(),

    profilePronouns: z.string({required_error: 'profilePronouns is required'})
        .trim()
        .min(1, {message: 'optional'})
        .max(10, {message: 'optional (max 10 characters)'})
        .nullable()
})

export type Profile = z.infer<typeof PrivateProfileSchema>