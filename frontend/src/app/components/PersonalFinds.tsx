"use server"

import React from "react";
import {ListGroup, ListGroupItem} from "flowbite-react";
import {fetchFindRecent} from "@/utils/actions/find/find.action";




/*
This function works identically to the @/frontend/src/app/components/RecentFinds.tsx,
excepting that it populates a list with a profile name and find date.

This component suffers from an identical set of problems as the RecentFinds component
 */
export default async function PersonalFinds() {

    const recentFinds = await fetchFindRecent()
    const plantsIds = recentFinds.map(i => i.findPlantId)
    const dates = recentFinds.map(i => i.findDateTime?.toString())

    let items = []

    for (let i = recentFinds.length -1; i >= 0; i--) {
        items.push(<ListGroupItem className={"bg-cyan-50 text-green-700"}> You found {plantsIds[i]} on {dates[i]}.</ListGroupItem>)
    }


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



