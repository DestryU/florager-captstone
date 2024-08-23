'use client'

import React from 'react'
import Overlay from "@/app/components/Overlay";
import {Map} from "@/app/components/Map";
import Hotbar from "@/app/components/Hotbar";

export default function Home() {
    return (
        <>
            <Overlay />
            <Map />
        </>
    )
}