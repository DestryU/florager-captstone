'use server'

import {Find, FindSchema} from "@/utils/actions/find/find.validator";

export async function fetchFindRecent() : Promise<Find[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/find/findRecent`, {
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