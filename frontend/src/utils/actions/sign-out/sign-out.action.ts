'use server'
import {clearSession} from "@/utils/session.utils";

export async function signOut() : Promise<boolean> {
    const result = await fetch(`${process.env.PUBLIC_API_URL}/apis/sign-out`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(!response.ok) {
           return false
        }else {
            return response.json()
        }
    })
    await clearSession()
    return true
}