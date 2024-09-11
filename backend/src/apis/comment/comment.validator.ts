import {z} from 'zod'

export const CommentSchema = z.object({

    commentId: z.string(
        {required_error: 'Please provide a valid commentId or null', invalid_type_error:"CommentId must be a uuid or null"}).uuid({message: 'Please provide a valid uuid for commentId'}).nullable(),

    commentProfileId: z.string(
        {required_error: 'Please provide a valid commentProfileId', invalid_type_error: 'commentProfileId must be a uuid'}).uuid({message: 'Please provide a valid uuid for commentProfileId'}),

    commentFindId: z.string(
        {required_error: 'Please provide a valid commentFindId or null', invalid_type_error: "commentFindId must be a uuid"}).uuid({message: 'Please provide a valid uuid for commentFindId'}).nullable(),

    commentText: z.string(
        {required_error: "commentText is a required field"}).max(255, {message: 'Please provide a valid commentText'}),

    commentDateTime: z.coerce.date(
        {required_error: 'Please provide a valid commentDatetime or null', invalid_type_error: "Comment date time is not a valid date"}).nullable(),
})
