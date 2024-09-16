'use client'

import Mapbox from "react-map-gl"
import {useState} from "react";
import {Pin} from "@/app/components/Map/Pin";
import {Find} from "@/utils/actions/find/find.validator";
import {Modal} from "flowbite-react";

type mapProps = {
    finds: Find[]
    popups: string[]
}



/*
This was a custom map component made using MapBox.

I'm stuck because Marty helped me set new pin locations with the useState().
It was working, but in an attempt to further manipulate that data, I've managed
to break this entire system. This code is a rollback to that last stable version.
 */


export function Map (props: mapProps) {

    const {finds, popups} = props

    return (
        <>
            <Mapbox
                initialViewState={{
                    latitude: 35.33,
                    longitude: -106.65,
                    zoom: 9
                }}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                style={{width: 1900, height: 740}}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"
            >
                {finds.map(find => <Pin find={find} popups={popups}/>)}
            </Mapbox>
        </>
    )
}