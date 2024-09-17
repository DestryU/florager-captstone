'use server'
import {IdentifiedPlantCard} from "@/app/identifier/IdentifiedPlantCard";

type IdentifiedPlantsProps = {
    plantScientificNames: string[]
}
export async function IdentifiedPlants(props: IdentifiedPlantsProps) {
    const {plantScientificNames} = props

    return (
        <div>
            {/*{plantScientificNames.map((plantScientificName, index) => <IdentifiedPlantCard key={index} plantScientificName={plantScientificName} />)}*/}

        </div>
    )
}