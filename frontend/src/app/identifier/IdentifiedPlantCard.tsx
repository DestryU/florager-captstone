import {fetchPlantByScientificName} from "@/utils/actions/plant/plant.model";


type IdentifiedPlantCardProps = {
    plantScientificName: string
}

export async function IdentifiedPlantCard(props: IdentifiedPlantCardProps) {
    const {plantScientificName} = props
    const plant = await fetchPlantByScientificName(plantScientificName)
    console.log(plant)
    return (
        <>
            {plant &&
        <div>
            IdentifiedPlantCard
            <div>
                {/*{plant.plantCommonNames}*/}
            </div>
            <div>
                {plant.plantScientificName}
            </div>
            <div>
                {plant.plantImageUrl}
            </div>
        </div>
            }
        </>
    )
}