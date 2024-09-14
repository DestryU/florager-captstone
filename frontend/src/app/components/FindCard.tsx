'use server'
import React from "react";

import { Card } from "flowbite-react";

import {fetchFindId} from "@/utils/actions/find/find.action";
import {fetchPlantById} from "@/utils/actions/plant/plant.action";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";


type Props = {
    findId: string,
}


// Creates a populates a card with information about a Find. Requires a FindId
export default async function DistinctFindCard(findId: Props) {

    //Fetches for all relevant information
    const distinctFind = await fetchFindId(findId.findId)
    const distinctPlant = await fetchPlantById(`${distinctFind.findPlantId}`)
    const distinctUser = await getProfileByProfileId(`${distinctFind.findProfileId}`)

    //Uses the CommonName array to make a string of items, seperated by commas.
    //The last item in the array is appended with the word 'and'
    const altNamesList = distinctPlant.plantCommonNames.slice(1)
    const addAnd = (" and " + altNamesList.pop())
    let altNamesString = (altNamesList.join(", ") + addAnd)

    //Evaluates the number of alternate CommonNames and creates a string based on the outcome:
    //If there is only one CommonName, create a 'Call to Action'
    //If there are multiple CommonName, display the comma separated list
    if (altNamesList.length === 0 ) {
       altNamesString = (distinctPlant.plantCommonNames[0] + " doesn't seem to have any other common names. Leave a comment if you know of one!")
    } else {
        altNamesString = (distinctPlant.plantCommonNames[0] + " is also known as " + altNamesString)
    }


    return (
        <Card className="max-w-md bg-cyan-50" imgSrc={distinctPlant.plantImageUrl?.toString()} horizontal>
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