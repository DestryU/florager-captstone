import {NextFunction, Request, Response} from 'express'
import {verify} from 'jsonwebtoken'
import {Status} from '../interfaces/Status'
import {PublicProfile} from "../../apis/profile/profile.model";


export function isLoggedInController(request: Request, response: Response, next: NextFunction): Response | void {

    const status: Status = {status: 401, message: 'Please login', data: null}
    try {
        const profile: PublicProfile | undefined = request.session?.profile

        const signature: string | undefined = request.session?.signature

        const unverifiedJwtToken: string | undefined = request.headers?.authorization

        if (profile === undefined || signature === undefined || unverifiedJwtToken == undefined) {
            return response.json(status)
        }

        if (unverifiedJwtToken !== request.session?.jwt) {
            return response.json(status)
        }

        verify(unverifiedJwtToken, signature)

        return next()
    } catch (error: unknown) {
        return response.json(status)

    }

}