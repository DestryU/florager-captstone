'use client'

import Mapbox from "react-map-gl"
import {Pin} from "@/app/components/Map/Pin";
import {Find} from "@/utils/actions/find/find.validator";

type mapProps = {
    finds: Find[]
}

export function Map (props: mapProps) {

    const {finds} = props

    return (
        <>
            <Mapbox
                initialViewState={{
                    latitude: 35.0844,
                    longitude: -106.6504,
                    zoom: 11
                }}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                style={{width: 1900, height: 740}}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"
            >
                {finds.map(find => <Pin find={find}/>)}
            </Mapbox>
        </>
    )
}