// we're starting stuff

import {PlantCard} from "@/app/plants/PlantCard";

export default function () {

    const plants = [
        {
            plantId: '789bcb02-7139-4778-89bc-641b2c1733f2',
            plantCommonName: 'Red Oak',
            plantScientificName: 'Oak of Crimson Hues',
            plantInfo: 'A very large tree that has nothing to do with the color red',
            plantUses: 'Great for shade, similar to most trees',
            plantRange: 'Everywhere it grows',
            plantConservation: "It's surviving, like we all are",
            plantImageUrl: 'https://placehold.co/600x400'
        },
        {
            plantId: '526e6f69-ca0c-42cb-bf6a-165a50d089be',
            plantCommonName: 'Yellow Oak',
            plantScientificName: 'Oak of amber Hues',
            plantInfo: 'A very large tree that has nothing to do with the color yellow',
            plantUses: 'Not great for much, decent at some things',
            plantRange: 'somewhere',
            plantConservation: "Things could be better",
            plantImageUrl: 'https://placehold.co/600x400'
        },
        {
            plantId: 'ba562ba1-eb36-4660-82c9-f112256d0e2a',
            plantCommonName: 'Blue Oak',
            plantScientificName: 'Oak of cerulean Hues',
            plantInfo: 'A very large tree that has nothing to do with the color blue',
            plantUses: 'Blue dyes',
            plantRange: 'Specific places',
            plantConservation: "It's doing okay",
            plantImageUrl: 'https://placehold.co/600x400'
        },
        {
            plantId: 'ba562ba1-eb36-4660-82c9-f112256d0e2a',
            plantCommonName: 'Sunflower',
            plantScientificName: 'Sunroolio Octoolio',
            plantInfo: 'Lover of the sun, comes in all heights but typically has a yellow-orange hue on the pedals.',
            plantUses: 'Edible seeds',
            plantRange: 'Grows in all regions',
            plantConservation: "Fine",
            plantImageUrl: '@/public/sunflower.png',
        }

    ]

    console.log(plants)

    return (
        <>
            <h1>Plants page - Goodbye plants</h1>

            {plants.map(plant => <PlantCard plant={plant}/>)}

        </>
    )
}