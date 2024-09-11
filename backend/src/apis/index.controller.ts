import { Request, Response } from 'express'
import {selectAllPlant} from "./plant/plant.model";
import {dataDownloader} from "../utils/controllers/dataDownloader";

export async function indexController (request: Request, response: Response)
{
  const plants = await selectAllPlant()
  if (plants.length === 0){
    await dataDownloader()
  }
  return response.json('🤯 😬 😱')
}
