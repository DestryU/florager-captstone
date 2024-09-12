import React from 'react'
import Overlay from "@/app/components/Overlay";
import {Map} from "@/app/components/Map";
import Hotbar from "@/app/components/Hotbar";
import {fetchFindRecent} from "@/utils/actions/find/find.action";




export default async function Home() {

    const finds = await fetchFindRecent()
    console.log(finds)

    return (
        <>
            {/*<Hotbar />*/}
            <Overlay />
            <Map finds={finds}/>
        </>
    )
}