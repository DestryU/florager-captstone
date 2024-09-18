'use server'

import { unstable_noStore as noStore } from 'next/cache'
import {Plant, PlantSchema} from "@/utils/actions/plant/plant.validator";

noStore()



export async function fetchAllPlants() : Promise<Plant[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plant`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }else {
            return response.json()
        }
    })
    return PlantSchema.array().parse(data)
}



export async function fetchPlantById(plantId: string) : Promise<Plant> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plant/${plantId}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }else {
            return response.json()
        }
    })
    return PlantSchema.parse(data)
}

export async function fetchPlantByScientificName(plantScientificName: string) : Promise<Plant> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plant/plantScientificName/${plantScientificName}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }else {
            return response.json()
        }
    })
    console.log(data)
    return PlantSchema.array().max(1).parse(data)[0]
}