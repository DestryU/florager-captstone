import {Request, Response} from 'express'
import {
    selectAllComments,
    selectCommentByCommentFindId,
    selectCommentByCommentText,
    selectCommentByCommentId,
    deleteCommentByCommentId,
    insertComment,
    Comment
} from "./comment.model";
import {Status} from "../../utils/interfaces/Status";
import {PublicProfile, PublicProfileSchema} from "../profile/profile.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {CommentSchema} from "./comment.validator";


export async function postCommentController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = CommentSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {commentText, commentFindId} = validationResult.data

        const profile: PublicProfile = request.session.profile as PublicProfile

        const commentProfileId: string = profile.profileId as string

        const comment: Comment = {
            commentId: null,
            commentProfileId,
            commentFindId,
            commentText,
            commentDateTime: null
        }

        const result = await insertComment(comment)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Naur! Error creating comment. Try again.', data: null})
    }
}

export async function getAllCommentsController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllComments()

        const status: Status = {status: 200, message: null, data}
        return response.json(status)

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Eek. Error getting comments. Try again.',
            data: []
        })
    }
}

export async function getCommentByCommentTextController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.string({required_error:"commentText is required.", invalid_type_error: "commentText must be a string."}).uuid({message: 'Please provide a valid commentText'}).safeParse(request.params.commentText)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const commentText = validationResult.data
        const data = await selectCommentByCommentText(commentText)

        const status: Status = {status: 200, message: null, data}
        return response.json(status)

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Error getting comments. Try again.',
            data: []
        })
    }
}

export async function getCommentByCommentIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({required_error:"CommentId is required.", invalid_type_error: "CommentId must be a string."}).uuid({message: 'please provide a valid commentId'}).safeParse(request.params.commentId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const commentId = validationResult.data
        const data = await selectCommentByCommentId(commentId)

        const status: Status = {status: 200, message: null, data}
        return response.json(status)

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Error getting comments. Try again.',
            data: []
        })
    }
}

export async function getCommentByCommentFindIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.string({required_error:"CommentFindId is required.", invalid_type_error: "CommentFindId must be a string."}).uuid({message: 'please provide a valid commentFindId'}).safeParse(request.params.commentFindId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const commentFindId = validationResult.data
        const data = await selectCommentByCommentFindId(commentFindId)

        const status: Status = {status: 200, message: null, data}
        return response.json(status)

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Error getting comments. Try again.',
            data: []
        })
    }
}

export async function deleteCommentByCommentIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.string().uuid({message: 'Please provide a valid commentId'}).safeParse(request.params.commentId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const profile: PublicProfile = request.session.profile as PublicProfile

        const commentProfileId: string = profile.profileId as string

        const commentId = validationResult.data

        const comment = await selectCommentByCommentId(commentId)

        if(comment?.commentProfileId !== commentProfileId) {
            return response.json({
                status: 403,
                message: 'You are not allowed to delete this comment',
                data: null
            })
        }

        const result = await deleteCommentByCommentId(commentId)

        return response.json({status: 200, message: result, data: null})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}