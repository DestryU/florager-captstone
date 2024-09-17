'use server'

import React from "react";

import { Card } from "flowbite-react";

import {fetchFindId} from "@/utils/actions/find/find.action";
import {fetchPlantById} from "@/utils/actions/plant/plant.model";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";


type Props = {
    findId: string,
}

export default async function DistinctFindCard(findId: Props) {

    const distinctFind = await fetchFindId(findId.findId)
    const distinctPlant = await fetchPlantById(`${distinctFind.findPlantId}`)
    const distinctUser = await getProfileByProfileId(`${distinctFind.findProfileId}`)

    const altNamesList = distinctPlant.plantCommonNames.slice(1)
    const addAnd = (" and " + altNamesList.pop())
    let altNamesString = (altNamesList.join(", ") + addAnd)

    if (altNamesList.length === 0 ) {
       altNamesString = (distinctPlant.plantCommonNames[0] + " doesn't seem to have any other common names. Leave a comment if you know of one!")
    } else {
        altNamesString = (distinctPlant.plantCommonNames[0] + " is also known as " + altNamesString)
    }


    return (
        <Card className="max-w-md bg-green-100" imgSrc={distinctPlant.plantImageUrl?.toString()} horizontal>
            <div className={"flex-col pb-[.5rem]"}>
                <h4 className={"text-[2.5rem] font-[700] text-green-700"}>
                    {distinctPlant.plantCommonNames[0]}
                </h4>
                <h5 className={"italic text-cyan-800"}>
                    {distinctPlant.plantScientificName}
                </h5>
            </div>

            <p className={"text-justify pb-[.5rem]"}>
                {altNamesString}
            </p>

            <p className=" font-[500] text-neutral-900 dark:text-gray-400 place-self-center">
                <span className={"font-[600]"}><em>{distinctUser.profileUserName}</em></span> found this plant <br/>
                    {distinctFind.findDateTime?.toString()}
            </p>
        </Card>
    );
}