import {Router} from "express";
import {
    getPublicProfileByIdController, getPublicProfileByProfileIdController, getPublicProfileByProfileUserNameController,
} from "./profile.controller";

const basePath ='/apis/profile'
const router: Router = Router()

router.route('/:profileId')
    .get(getPublicProfileByProfileIdController)
    .put(isLoggedInController, putProfileController)

router.route('/profileNames/:profileName')
    .get(getPublicProfilesByProfileNameController)

router.route('/profileName/:profileName')
    .get(getPublicProfileByProfileNameController)

export const profileRoute = {basePath, router}