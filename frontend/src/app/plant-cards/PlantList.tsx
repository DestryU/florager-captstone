"use client";

import React from "react";
import {Plant} from "@/utils/actions/plant/plant.validator";
import PlantCard from "@/app/plant-cards/PlantCard";


type PlantListProps = {
    plants: Plant[];
};

export function PlantList({plants}: PlantListProps) {
    //limit the number of plants to 3
    const limitedPlants = plants.slice(0,3);

    return (
        <div className="flex flex-wrap gap-20 justify-center">
            {limitedPlants.map(plant => (
                <div key={plant.plantId} className="flex-shrink-0">
                <PlantCard plant={plant}/>
                </div>
            ))}
        </div>
    );
}