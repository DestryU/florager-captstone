
import {IdentifiedPlantCard} from "@/app/identifier/results/IdentifiedPlantCard";
import {Plant} from "@/utils/actions/plant/plant.validator";

type IdentifiedPlantsProps = {
    plants: Plant[]
}
export function IdentifiedPlants(props: IdentifiedPlantsProps) {
    const {plants} = props
    console.log(plants)
    return (
        <div>
            {plants.map((plant, index) => <IdentifiedPlantCard key={index} plant={plant} />)}

        </div>
    )
}