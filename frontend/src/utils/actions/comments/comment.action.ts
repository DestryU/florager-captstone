import { z } from 'zod'
import {unstable_noStore as noStore} from "next/cache";

export const CommentSchema = z.object({
    commentId: z.string({required_error: 'please provide a valid commentId or null', invalid_type_error:"commentId must be a uuid or null"}).uuid({message: 'please provide a valid uuid for commentId'}),
    commentProfileId: z.string({required_error: 'please provide a valid commentProfileId', invalid_type_error: "commentProfileId must be a uuid"}).uuid({message: 'please provide a valid uuid for commentProfileId'}),
    commentFindId: z.string({required_error: 'please provide a valid commentFindId or null', invalid_type_error: "commentFindId must be a uuid"}).uuid({message: 'please provide a valid uuid for commentFindId'}).nullable(),
    commentText:
        z.string({required_error: "content for a comment is required"}).max(255, {message: 'please provide a valid commentText'}),
    commentDateTime:
        z.coerce.date({required_error: 'please provide a valid commentDatetime or null', invalid_type_error: "comment date time is not a valid date"}).nullable(),
})
export type Comment = z.infer<typeof CommentSchema>


export async function fetchAllComments() : Promise<Comment[]> {
    noStore()
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },

    }).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error fetching comments')
        } else {
            return response.json()
        }

    })

    return CommentSchema.array().parse(data)

}

export async function fetchCommentByCommentId(commentId: string): Promise<Comment> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment/${commentId}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },

    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error fetching comment')
        } else {
            return response.json()
        }

    })

    return CommentSchema.parse(data)
}

export async function fetchCommentsByProfileId(profileId: string): Promise<Comment[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment/commentProfileId/${profileId}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },

    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error fetching comments')
        } else {
            return response.json()
        }

    })

    return CommentSchema.array().parse(data)
}