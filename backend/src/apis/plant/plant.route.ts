import { Router } from 'express'
import { postPlantController } from './plant.controller'
import { getPlantByPlantIdController } from "./plant.controller"
import { getPlantByPlantCommonNameController } from "./plant.controller"
import { getPlantByPlantScientificNameController } from "./plant.controller";

// define the base path for the route

const basePath = '/apis/plant'

const router = Router()

router.route('/')
    .post(postPlantController)

router.route('/:plantId')
    .get(getPlantByPlantIdController)

router.route('/plantCommonName/:plantCommonName')
    .get(getPlantByPlantCommonNameController)

router.route('/plantScientificName/:plantScientificName')
    .get(getPlantByPlantScientificNameController)

export const plantRoute = {
    router, basePath
}