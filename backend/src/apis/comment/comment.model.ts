import {z} from 'zod'
import {sql} from "../../utils/database.utils";

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

export type Comment = z.infer<typeof CommentSchema>

export async function insertComment(comment: Comment): Promise<string> {
    const {commentId, commentProfileId, commentFindId, commentText, commentDateTime} = comment

    await sql`INSERT INTO comment (comment_id, comment_profile_id, comment_find_id, comment_text, comment_date_time)
              VALUES (gen_random_uuid(), ${commentProfileId}, ${commentFindId}, ${commentText}, now())`

    return 'Comment successfully posted'
}

export async function selectAllComments(): Promise<Comment[]> {
    const rowList = <Comment[]>await sql`SELECT comment_id,
                                      comment_profile_id,
                                      comment_find_id,
                                      comment_text,
                                      comment_date_time
                               FROM comment
                               ORDER BY comment_date_time DESC`

    return CommentSchema.array().parse(rowList)
}

export async function selectCommentByCommentId(commentId: string): Promise<Comment | null > {
    const rowList = <Comment[]>await sql`SELECT comment_id,
                                      comment_profile_id,
                                      comment_find_id,
                                      comment_text,
                                      comment_date_time
                               FROM comment
                               WHERE comment_id = ${commentId}`
    const result = CommentSchema
        .array().max(1).parse(rowList)
        return result.length === 0 ? null : result[0]
}

export async function selectCommentByCommentFindId(commentFindId: string): Promise<Comment[]> {
    const rowList = <Comment[]>await sql`SELECT comment_id,
                                      comment_profile_id,
                                      comment_find_id,
                                      comment_text,
                                      comment_datetime
                               FROM comment
                               WHERE comment_find_id = ${commentFindId}`
    return CommentSchema.array().parse(rowList)
}

export async function selectCommentByCommentText(commentText: string): Promise<Comment | null> {
    const rowList = <Comment[]>await sql`SELECT comment_id,
                                      comment_profile_id,
                                      comment_find_id,
                                      comment_text,
                                      comment_datetime
                                    FROM comment
                                    WHERE comment_id = ${commentText}`

    const result = CommentSchema.array().max(1).parse(rowList)

    return result.length === 0 ? null : result[0]
}

export async function deleteCommentByCommentId(commentId: string): Promise<string> {
    await sql`DELETE
              FROM comment
              WHERE comment_id = ${commentId}`

    return 'Comment successfully deleted'
}