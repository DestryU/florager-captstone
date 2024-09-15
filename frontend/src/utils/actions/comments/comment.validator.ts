import {z} from 'zod'

export const CommentSchema = z.object({
    commentId: z.string({required_error: 'please provide a valid commentId or null'}).uuid({message: 'please provide a valid uuid for commentId'}),
    commentProfileId: z.string({required_error: 'please provide a valid commentProfileId'}).uuid({message: 'please provide a valid uuid for commentProfileId'}),
    commentFindId: z.string({required_error: 'please provide a valid commentFindId or null'}).uuid({message: 'please provide a valid uuid for commentFindId'}).nullable(),
    commentText:
        z.string().max(255, {message: 'please provide a valid commentText'}),
    commentDatetime:
        z.coerce.date({required_error: 'please provide a valid threadDatetime or null'}),
})

export type Comment = z.infer<typeof CommentSchema>
