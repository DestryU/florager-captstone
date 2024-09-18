import {fetchAllPlants} from "@/utils/actions/plant/plant.action";
import {PlantList} from "@/app/plant-cards/PlantList";
import React from "react";



export default async function Page(){

    const plants = await fetchAllPlants();


    return (
        <main className="p-4 mx-auto mt-20">
            <div className="text-center mb-8">
            <h1 className="text-6xl font-bold">Based on Your Image - Here are 3 Comparable Plants: </h1>
            </div>
            <div className="flex flex-wrap gap-4 justify-center overflow-hidden">
                <PlantList plants={plants}/>
            </div>
        </main>
    );
}



