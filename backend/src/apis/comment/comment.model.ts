import {z} from 'zod'
import {sql} from "../../utils/database.utils";
import {CommentSchema} from "./comment.validator";


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
                                      comment_date_time
                               FROM comment
                               WHERE comment_find_id = ${commentFindId}`
    return CommentSchema.array().parse(rowList)
}

export async function selectCommentByCommentText(commentText: string): Promise<Comment | null> {
    const rowList = <Comment[]>await sql`SELECT comment_id,
                                      comment_profile_id,
                                      comment_find_id,
                                      comment_text,
                                      comment_date_time
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