import { Router } from 'express'
import { postPlantController } from './plant.controller'

// define the base path for the route

const basePath = '/apis'

const router = Router()

router.route('/')
    .post(postPlantController)

export const plantRoute = {
    router, basePath
}