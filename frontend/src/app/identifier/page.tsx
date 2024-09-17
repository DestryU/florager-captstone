
import React from 'react';
import {IdentifyForm } from "@/app/identifier/IdentifyForm";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";



export default async function IdentifyPage() {
    const loggedInUser = await getSession()
    const apiKey= process.env.PLANTNET_API_KEY

    if (!loggedInUser) {
        redirect ('/')
    }
    let result:object[] = []
    console.log(result)


    return (
        <>
            {/*{/!*add header to page*!/}*/}

                <div>
                <h1 className={"mx-auto mt-10 font-bold text-4xl text-green-700 text-center py-5"}>Upload a .jpg or .png Image File Below</h1>

                <div className={"mx-auto ml-24 flex flex-wrap justify-center"}>
                <IdentifyForm apiKey={apiKey} result={result} authorization={loggedInUser.authorization}/>
                </div>

                <button className={"mx-auto flex flex-wrap justify-center p-5 border-4 border-green-300 bg-green-700 text-white mt-10 text-2xl rounded-lg font-bold"}>Identify Plant</button>
                </div>

        </>
    )
}

