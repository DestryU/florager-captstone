
import React from 'react'
import {Map} from "@/app/components/Map";
import {fetchFindRecent} from "@/utils/actions/find/find.action";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";
import {fetchPlantById} from "@/utils/actions/plant/plant.model";
import DistinctFindCard from "@/app/components/FindCard";


export default async function Home() {

    const recentFinds = await fetchFindRecent()
    const plantIds = recentFinds.map(i => i.findPlantId)
    const profileIds = recentFinds.map(i => i.findProfileId)

    const recentPlants = []
    for (let i of plantIds) {
        recentPlants.push(await fetchPlantById(i))
    }

    const recentProfiles = []
    for (let i of profileIds) {
        recentProfiles.push(await getProfileByProfileId(i))
    }

    const recentPlantNames = recentPlants.map(i => i.plantCommonNames[0])
    const recentProfileNames = recentProfiles.map(i => i.profileUserName)

    const recentPins = []
    for (let i = recentPlants.length -1; i >= 0; i--) {
        recentPins.push(recentPlantNames[i] + " was found by " + recentProfileNames[i])
    }








    return (
        <>
            <Map finds={recentFinds} popups={recentPins}/>
            {/*<DistinctFindCard findId={"8887bfbb-913f-4e1d-8779-7ce1fb4e06ed"}/>*/}
            {/*<MapDrawer/>*/}
            {/*<RecentFinds/>*/}
            {/*<PersonalFinds/>*/}
        </>
    )
}