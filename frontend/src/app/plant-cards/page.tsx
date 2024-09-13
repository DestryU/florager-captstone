import {PlantQuery} from "@/app/plant-cards/query-plant";
import {getSession} from "@/utils/fetchSession";
import {redirect} from "next/navigation";
import {fetchPlantById, Plant} from "@/utils/actions/plant/plant.action"
import React from "react";
import {PlantCard} from "@/app/plant-cards/fetch-plants";
type Props = {
    params : {plantId: string}
}
export default async function Page(props: Props){

    const session = await getSession()
    const plant : Plant = await fetchPlantById(props.params.plantId)
    if(session === null) {
        return redirect('/sign-in')
    }

    return (
        <>
            <div className= "flex justify-center">
                <div
                    className="max-w-screen-lg rounded overflow-hidden bg-white mx-auto shadow-lg my-10 border border-slate-950 p-5">
                    <h1 className="font-bold text-x-lg">Select from these plants</h1><br/>
                    <p className="inline-flex items-center mr-3 text-md font-bold mb-2"></p>
                    <PlantCard/>
                    {/*<PlantQuery session={session} plant={plant}/>*/}
                </div>
            </div>

        </>
    )
}