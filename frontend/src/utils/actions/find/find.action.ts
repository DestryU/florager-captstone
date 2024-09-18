'use server'

import {Find, FindSchema} from "@/utils/actions/find/find.validator";
import {Props} from "next/script";

export async function fetchFindId(findId: string) : Promise<Find> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/find/findId/${findId}`, {
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
    return FindSchema.parse(data)
}

export async function fetchFindPlantId(findPlantId: string) : Promise<Find[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/find/findPlantId/${findPlantId}`, {
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
    return FindSchema.array().parse(data)
}

export async function fetchFindProfileId(findProfileId: string) : Promise<Find[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/find/findProfileId/${findProfileId}`, {
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
    return FindSchema.array().parse(data)
}

export async function fetchFindRecent() : Promise<Find[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/find/findRecent`, {
        method: "get",
        next: {revalidate: 5},
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
    return FindSchema.array().parse(data)
}