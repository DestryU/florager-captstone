import { Router } from 'express'
import { imageUploader} from "../../utils/controllers/multer.controller";
import { imageUploadController} from "./image.controller";

const basePath = '/apis/image/'

const router = Router()

router.route('/')
    .post(imageUploader, imageUploadController)

export const imageRoute = { basePath, router }