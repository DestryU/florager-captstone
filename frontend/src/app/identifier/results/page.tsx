import {fetchPlantByScientificName} from "@/utils/actions/plant/plant.model";
import {IdentifiedPlantCard} from "@/app/identifier/results/IdentifiedPlantCard";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";


type PageProps = {
    searchParams: {
        plantName: string[],
        cloudinaryUrl: string
    }
}

export default async function (props: PageProps) {
    const loggedInUser = await getSession()

    if (!loggedInUser) {
        redirect ('/')
    }
    const plantScientificNames = props.searchParams.plantName
    console.log(plantScientificNames)
    let plants: any[] = []
for (let plantScientificName of plantScientificNames) {
    const plant = await fetchPlantByScientificName(plantScientificName)
    console.log(plant)
    if (plant) {
        plants.push(plant)
    }
}
    console.log(plants)

   return (
       <>
           {plants.map(plant => <IdentifiedPlantCard loggedInUser={loggedInUser} plant={plant} key={plant.plantId} findImageUrl={props.searchParams.cloudinaryUrl} />)}

       </>

   )


}