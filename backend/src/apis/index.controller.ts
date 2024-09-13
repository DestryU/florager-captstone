import { Request, Response } from 'express'


export async function indexController (request: Request, response: Response)
{
  return response.json('🤯 😬 😱')
}

