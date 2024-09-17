
import React from 'react'
import {Map} from "@/app/components/Map";
import {fetchFindRecent} from "@/utils/actions/find/find.action";

export default async function Home() {

    const recentFinds = await fetchFindRecent()
    return (
        <>
            <Map finds={recentFinds}/>
        </>
    )
}