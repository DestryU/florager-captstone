import { Request, Response } from 'express'
import {selectAllPlant} from "./plant/plant.model";
import {dataDownloader} from "../utils/controllers/dataDownloader";

export async function indexController (request: Request, response: Response) {
  return response.json("This thing is on")
}