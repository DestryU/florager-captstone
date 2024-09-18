'use client'

import Mapbox from "react-map-gl"
import {useState} from "react";
import {Pin} from "@/app/components/Map/Pin";
import {Find} from "@/utils/actions/find/find.validator";
import {Modal} from "flowbite-react";

type mapProps = {
    find: Find[]
}



/*
This was a custom map component made using MapBox.

I'm stuck because Marty helped me set new pin locations with the useState().
It was working, but in an attempt to further manipulate that data, I've managed
to break this entire system. This code is a rollback to that last stable version.
 */


export function Map (props: mapProps) {

    const {find} = props
    // const [points] = useState(find.map(find => ({lat: find.findLat, lng: find.findLng})))
    const [points] = useState([
        { lat: 35.332, lng: -106.652 },
        { lat: 35.339, lng: -106.656 },
        { lat: 35.40, lng: -106.666 },
        { lat: 35.23, lng: -106.4444 },
        { lat: 35, lng: -106.25 }
    ])

    return (
        <>
            <Mapbox
                initialViewState={{
                    latitude: 35.33,
                    longitude: -106.65,
                    zoom: 9
                }}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                style={{width: 1920, height: 750}}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"
            >
                {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
            </Mapbox>
        </>
    )
}