
type Plant = {
    plantId: string,
    plantCommonName: string,
    plantScientificName: string,
    plantInfo: string,
    plantUses: string,
    plantRange: string,
    plantConservation: string,
    plantImageUrl: string
}




export function PlantCard (props: {plant: Plant}) {
    const {plant} = props

    return (
        <>
            <h2>{plant.plantCommonName}</h2>

            <h2>{plant.plantUses}</h2>

        </>
    )
}