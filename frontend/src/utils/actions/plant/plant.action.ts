'use server'

import {Plant, PlantSchema} from "@/utils/actions/plant/plant.validator";

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