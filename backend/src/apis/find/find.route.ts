import { Router } from 'express'
import { postFindController } from './find.controller'

const basePath = '/apis/find'

const router = Router()

router.route('/').post(postFindController)

export const findRoute = {router, basePath}