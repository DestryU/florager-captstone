'use server'

import Hotbar from './Hotbar'
import DistinctFindCard from "@/app/components/FindCard";
import React from "react";


export default async function Overlay() {


    return (
        <>
            <section id='thisId' className={"fixed h-full w-full flex justify-center items-end p-12 z-[9999] pointer-events-none"}>
                <div className={"place-self-start"}>
                    <DistinctFindCard findId={"8887bfbb-913f-4e1d-8779-7ce1fb4e06ed"}/>
                </div>
                <Hotbar />



            </section>
        </>
    )
}