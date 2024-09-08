import { Router } from 'express'
import { postFindController, getFindByPrimaryKeyController } from './find.controller'

const basePath = '/apis/find'

const router = Router()

router.route('/').post(postFindController)

router.route('/findId/:findId').get(getFindByPrimaryKeyController)

export const findRoute = {router, basePath}