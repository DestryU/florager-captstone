'use server'

import {Profile, PrivateProfileSchema} from "@/app/utils/actions/profile/profile.validator";

export async function getProfileByProfileId(profileId: string) : Promise<Profile> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/profile/${profileId}`, {
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

    return PrivateProfileSchema.parse(data)
}