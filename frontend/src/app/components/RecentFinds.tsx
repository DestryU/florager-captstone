"use server"

import React from "react";
import {ListGroup, ListGroupItem} from "flowbite-react";
import {fetchFindRecent} from "@/utils/actions/find/find.action";




/*
This function is supposed to return a Flowbite 'List Group'.
The list is made of the 25 most recent 'Finds' (limit set in @/backend/src/apis/find/find.model.ts)
 */
export default async function RecentFinds() {

    /*
    These variables pull in the complete array of Recent Finds,
    and then remap them to new arrays featuring all the PlantIds and ProfileIds
     */
    const recentFinds = await fetchFindRecent()
    const plantIds = recentFinds.map(i => i.findPlantId)
    const profileIds = recentFinds.map(i => i.findProfileId)

    let items = []

    /*
    This loop goes through and adds each ListGroupItem to an array,
    which is called as the sole markup in the return statement.
    The loop's index is used to sync the data between each array.

    I'm stuck here because I don't know how to call async functions
    as part of other functions, such as when using .map(). These arrays
    are supposed to show ProfileNames and the index 0 CommonNames instead.
     */
    for (let i = recentFinds.length -1; i >= 0; i--) {
        items.push(<ListGroupItem className={"bg-cyan-50 text-green-700"}> {plantIds[i]} was foraged by {profileIds[i]}.</ListGroupItem>)
    }


    /*
    I'm also stuck here because I would want each ListGroupItem
    to link to a corresponding map pin. ListGroupItem can be given the
    onClick() event, but that only works on client-side components.
    I don't fully understand how to intertwine server and client functionality
     */
    return (
        <div className={"h-[250px] w-[525px] overflow-auto"}>
            <div className="flex justify-center w-[500px]">
                <ListGroup className="w-[600px]">
                    {items}
                </ListGroup>
            </div>
        </div>
    );
}



