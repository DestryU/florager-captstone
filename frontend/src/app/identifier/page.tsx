
import React from 'react';
import {IdentifyForm } from "@/app/identifier/IdentifyForm";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";



export default async function IdentifyPage() {
    const loggedInUser = await getSession()
    const apiKey: string | undefined = process.env.PLANTNET_API_KEY

    if (!loggedInUser) {
        redirect ('/')
    }
    let result:object[] = []
    console.log(result)


    return (
        <>
            {/*{/!*add header to page*!/}*/}

            <div className={"flex min-h-auto gap-4 min-w-full flex-col grow"}>
                <h2 className={"mx-auto mt-10 font-bold text-4xl text-green-700 text-center py-5"}>Welcome to the Plant
                    Identifier!</h2>
                <h2 className={"mx-auto mt-10 font-bold text-4xl text-green-700 text-center py-5"}>Upload a .jpg or .png
                    Image File Below</h2>

                <div className={"mx-auto ml-24 flex flex-wrap justify-center mb-20"}>
                    <IdentifyForm apiKey={apiKey} result={result} authorization={loggedInUser.authorization}/>
                </div>

            </div>

        </>
    )
}

