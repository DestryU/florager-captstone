import { Router } from 'express'
import {
    postFindController,
    getFindByPrimaryKeyController,
    getFindByPlantIdController,
    getFindByProfileIdController,
    getFindByRecentController
} from './find.controller'

const basePath = '/apis/find'

const router = Router()

router.route('/').post(postFindController)


router.route('/findId/:findId').get(getFindByPrimaryKeyController)
router.route('/findPlantId/:findPlantId').get(getFindByPlantIdController)
router.route('/findProfileId/:findProfileId').get(getFindByProfileIdController)
router.route('/findRecent').get(getFindByRecentController)

export const findRoute = {router, basePath}