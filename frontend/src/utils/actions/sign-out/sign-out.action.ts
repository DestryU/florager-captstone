'use server'
import {clearSession} from "@/utils/session.utils";
import {Session} from "node:inspector";

export async function signOut() : Promise<void> {
    const result = await fetch(`${process.env.PUBLIC_API_URL}/apis/sign-out/${Session}`, {
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
    await clearSession()
    return result.message
}