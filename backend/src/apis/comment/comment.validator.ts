import {z} from 'zod'
import {CommentSchema} from "./comment.model";

export const CommentSchema = z.object({
    commentId: z.string({required_error: 'Please provide a valid commentId or null'}).uuid({message: 'Please provide a valid uuid for commentId'}).nullable(),
    commentProfileId: z.string({required_error: 'Please provide a valid commentProfileId'}).uuid({message: 'Please provide a valid uuid for commentProfileId'}),
    commentFindId: z.string({required_error: 'Please provide a valid commentFindId or null'}).uuid({message: 'Please provide a valid uuid for commentFindId'}).nullable(),
    commentText:
        z.string().max(255, {message: 'Please provide valid commentText'}),
    commentDatetime:
        z.date({required_error: 'Please provide a valid commentDatetime or null'}).nullable()
})