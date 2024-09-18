import React from 'react'
import {Map} from "@/app/components/Map";
import {fetchFindRecent} from "@/utils/actions/find/find.action";


export default async function Home() {

    const finds = await fetchFindRecent()
    console.log(finds)

    return (
        <>

            <Map finds={finds}/>
        </>
    )
}