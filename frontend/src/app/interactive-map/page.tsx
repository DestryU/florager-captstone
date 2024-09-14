import React from 'react'
import Overlay from "@/app/components/Overlay";
import {Map} from "@/app/components/Map";
import {fetchFindRecent} from "@/utils/actions/find/find.action";
import {Navigation} from "@/app/components/Navigation";
import {getSession} from "@/utils/session.utils";


export default async function Home() {

    const find = await fetchFindRecent()
    const loggedInUser = await getSession()

    return (
        <>
            <Navigation  loggedInProfile={loggedInUser?.profile || null}/>
            <Overlay />
            <Map find={find}/>
        </>
    )
}