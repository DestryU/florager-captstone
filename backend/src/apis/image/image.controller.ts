import { Request, Response } from 'express'
import { uploadToCloudinary } from '../../utils/interfaces/cloudinary.utils'

export async function imageUploadController (request: Request, response: Response): Promise<Response> {
    try {

        if (request.file === undefined) {
            throw new Error('Please provide a valid file type ')
        }
        console.log('help!!!!')
        const message: string = await uploadToCloudinary(request.file)
        return response.json({ status: 200, data: null, message: message })
    } catch (error: any) {
        console.log(error)
        return response.json({ status: 500, message: error.message, data: null })
    }
}