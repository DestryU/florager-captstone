
import React from 'react'
import {Map} from "@/app/components/Map";
import {fetchFindRecent} from "@/utils/actions/find/find.action";
import {getSession} from "@/utils/session.utils";
import {MapDrawer} from "@/app/components/MapDrawer";
import DistinctFindCard from "@/app/components/FindCard";
import RecentFinds from "@/app/components/RecentFinds";
import PersonalFinds from "@/app/components/PersonalFinds";


export default async function Home() {

    const recentFinds = await fetchFindRecent()

    const loggedInUser = await getSession()

    const temp = await fetchFindRecent()
    // console.log(temp)


    /*
    This is the main page for the Map.

    I'm stuck because in the process of nesting modals, canvases, and other
    layered elements I no longer understand how to orient HTML elements on the
    page using Tailwind. I want to have several elements appearing over the Map,
    and I don't know how to do that.
     */

    return (
        <>
            <Map find={recentFinds}/>
            <DistinctFindCard findId={"8887bfbb-913f-4e1d-8779-7ce1fb4e06ed"}/>
            <MapDrawer/>
            <RecentFinds/>
            <PersonalFinds/>
        </>
    )
}