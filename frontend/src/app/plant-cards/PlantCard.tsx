//
// import { Card } from "flowbite-react";
// import {Plant} from "@/utils/actions/plant/plant.validator";
// type plantCardProps = {plant:Plant}
//
// export function PlantCard(props: plantCardProps) {
// const {plant} = props;
//     return (
//
//
//                 <Card key={plant.plantId} className="w-full">
//                     im
//                     <h5 className="text-xl font-semibold tracking-tight text-grapy dark:text-white">
//                         {plant.plantScientificName}
//                     </h5>
//
//                         {plant.plantCommonNames && plant.plantCommonNames.map(commonName => <h4>{commonName}</h4>)}
//
//                     <p className="font-normal text-gray-700 dark:text-gray-400">
//                         {plant.plantReferenceUrl}
//                     </p>
//                 </Card>
//
//
//     );
// }

"use client";
import React from 'react';
import { Card } from 'flowbite-react';
import { Plant } from '@/utils/actions/plant/plant.validator';
import Link from "next/link";
type PlantCardProps = {
    plant: Plant
};

function PlantCard({ plant }: PlantCardProps) {
    return (
        <Card key={plant.plantId} className="w-[380px] flex-shrink-0">
            {/* Display the plant image */}
            {plant.plantImageUrl && (
                <img
                    src={plant.plantImageUrl}
                    alt={plant.plantScientificName}
                    className="rounded-t-lg"
                />
            )}
            <div className="p-4 flex flex-col justify-between">
                <div className="flex-grow">
                <h4 className="text-lg text-gray-900 dark:text-gray-400">
                    <p><strong>Scientific Name: </strong>{plant.plantScientificName}</p>
                </h4>

                    <h4><strong>Common Names: </strong>{plant.plantCommonNames && plant.plantCommonNames.map((commonName, index) => (
                        <p key={index} className="text-lg text-gray-700 dark:text-gray-400">
                            {commonName}
                        </p>
                    ))}</h4>
                        <h4 className="text-lg text-gray-900 dark:text-gray-400">
                    <p><strong>Reference URL: </strong> <Link target="_blank" href={plant.plantReferenceUrl}> {plant.plantReferenceUrl}</Link></p>
                </h4>
                </div>
            </div>
        </Card>
    );
}

export default PlantCard;
