import { Router } from 'express'
import {
    postFindController,
    getFindByPrimaryKeyController,
    getFindByPlantIdController,
    getFindByProfileIdController
} from './find.controller'

const basePath = '/apis/find'

const router = Router()

router.route('/').post(postFindController)

// For a router, am I correct in assuming that the :notation means that, ideally, you're inserting some kind of variable into the URL? Where and how is all of this handled? Because if I change the :notation to something random, everything breaks, but I'm not calling it anywhere - where is this being monitored?

router.route('/findId/:findId').get(getFindByPrimaryKeyController)
router.route('/findPlantId/:findPlantId').get(getFindByPlantIdController)
router.route('/findProfileId/:findProfileId').get(getFindByProfileIdController)
router.route('/findRecent/:findRecent').get()

export const findRoute = {router, basePath}

//Another thing I don't understand is routes and controllers with respects to files. So, for example, we made a profile directory that included its own model, router, and controller - why did sign up and sign in need a different directory? Did they need a different directory? Here I've slapped a bunch of different controllers into different routes, why not just do that for everything relating to a single table?