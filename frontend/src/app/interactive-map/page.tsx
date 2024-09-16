
import React from 'react'
import {Map} from "@/app/components/Map";
import {fetchFindRecent} from "@/utils/actions/find/find.action";
import {getSession} from "@/utils/session.utils";
import {MapDrawer} from "@/app/components/MapDrawer";
import DistinctFindCard from "@/app/components/FindCard";
import RecentFinds from "@/app/components/RecentFinds";
import PersonalFinds from "@/app/components/PersonalFinds";
import {fetchPlantById} from "@/utils/actions/plant/plant.action";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";


export default async function Home() {

    const recentFinds = await fetchFindRecent()
    const plantIds = recentFinds.map(i => i.findPlantId)
    const profileIds = recentFinds.map(i => i.findProfileId)

    const recentPlants = []
    for (let i of plantIds) {
        recentPlants.push(await fetchPlantById(i))
    }

    // const recentProfiles = []
    // for (let i of profileIds) {
    //     recentProfiles.push(await getProfileByProfileId(i))
    // }

    const recentPlantNames = recentPlants.map(i => i.plantCommonNames[0])
    // const recentProfileNames = recentProfiles.map(i => i.profileUserName)

    for (let i = recentPlants.length; i >= 0; i--) {
        console.log(recentPlantNames[i] + " was found by ")
    }



    // const uniquePlantIds = [...new Set(plantIds)]



    /*
    You have no idea how badly I want to do this:

    plantIds.map(await fetchPlantById())

    But I can't. Why can't I, or more specifically, how do I something similar
    that doesn't yell at me for trying to do it?
     */

    return (
        <>
            <Map finds={recentFinds}/>
            {/*<DistinctFindCard findId={"8887bfbb-913f-4e1d-8779-7ce1fb4e06ed"}/>*/}
            {/*<MapDrawer/>*/}
            {/*<RecentFinds/>*/}
            {/*<PersonalFinds/>*/}
        </>
    )
}