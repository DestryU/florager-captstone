'use client'

import {Marker, Popup} from "react-map-gl";
import {Find} from "@/utils/actions/find/find.validator";
import {useState} from "react";
import Link from "next/link";


type Props = {
    find: Find,
}

export function Pin(props: Props) {
    const {find} = props
    const {findLat, findLng, findId} = find
    const [showPopup, setShowPopup] = useState(false)

    const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

    const SIZE = 18;

    return(
        <>

            {showPopup === true? <Popup
                anchor="top"
                longitude={findLng}
                latitude={findLat}
                onClose={() => setShowPopup(false)}
            >
                <div className={"flex justify-center items-center h-[30px] w-[125px] bg-green-200 rounded-xl"}>
                    {/*{find.findId}*/}
                    <Link
                        href={`/comments/${find.findId}`}
                    >
                        Show me this plant
                    </Link>
                </div>
            </Popup>: <></>}

            <Marker onClick={(e) => {
                e.originalEvent.stopPropagation()
                setShowPopup(true)
            }} key={`marker-${findId}`} longitude={findLng} latitude={findLat}>
                <svg
                    height={SIZE}
                    viewBox="0 0 24 24"
                    style={{
                        cursor: 'pointer',
                        fill: '#bf0355',
                        stroke: 'none',
                        transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                    }}
                >
                    <path d={ICON} />
                </svg>
            </Marker>
        </>
    )
}