import {
    getAllCommentsController,
    getCommentByCommentFindIdController,
    getCommentByCommentTextController,
    getCommentByCommentIdController,
    deleteCommentByCommentIdController,
    postCommentController,
} from "./comment.controller";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {Router} from 'express';

const basePath = '/apis/comment'

const router = Router()

router.route('/')
    .post(isLoggedInController, postCommentController)
    .get(getAllCommentsController)

router.route('/replies/commentFindId/:commentFindId').get(getCommentByCommentFindIdController)

router.route('/replies/commentText/:commentText').get(getCommentByCommentTextController)

router.route('/commentId/:commentId').get(getCommentByCommentIdController)

router.route('/:commentId')
    .get(getCommentByCommentIdController)
    .delete(isLoggedInController, deleteCommentByCommentIdController)

export const commentRoute = { basePath, router }
