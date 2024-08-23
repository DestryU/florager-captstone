import Mapbox from "react-map-gl"
import {useState} from "react";
import {Pin} from "@/app/components/Map/Pin";

export function Map () {
    const [points] = useState([
        { lat: 35.332, lng: -106.652 },
        { lat: 35.339, lng: -106.656 },
        { lat: 35.40, lng: -106.666 },
        { lat: 35.23, lng: -106.4444 }
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
                style={{width: 1900, height: 920}}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"

            >
                {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
            </Mapbox>
        </>
    )
}