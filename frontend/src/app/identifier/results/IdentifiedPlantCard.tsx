'use client'
import {Plant} from "@/utils/actions/plant/plant.validator";
import {Session} from "@/utils/session.utils";
import React, {useEffect, useState} from "react";
import {Button} from "flowbite-react";
import {Find} from "@/utils/actions/find/find.validator";


type IdentifiedPlantCardProps = {
    plant: Plant
    findImageUrl: string
    loggedInUser: Session
}

export function IdentifiedPlantCard(props: IdentifiedPlantCardProps) {
    const {plant, findImageUrl, loggedInUser} = props
    const [location, setLocation] = useState({lat: 35.08608185922586, lng: -106.64987611499501})
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos) {
        const crd = pos.coords;
        setLocation ({lat: crd.latitude, lng: crd.longitude})
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
useEffect(()=> {
    navigator.geolocation.getCurrentPosition(success, error, options);
},[success, error, options])

    function handlePlantFound() {
        const find: Find = {
            findImageUrl: findImageUrl,
            findProfileId: loggedInUser.profile.profileId,
            findPlantId: plant.plantId,
            findId: null,
            findLat: location.lat,
            findLng: location.lng,
            findDateTime: null

        }
        fetch('/apis/find', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(find)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    return (
        <>
        <div className={"grid sm:grid-cols-1 md:grid-cols-3 px-20 gap-5 content-center mb-20"}>
            <h3 className={"font-bold text-green-700 mt-10"}>Your Identified Plant Card</h3>
            <img src={plant.plantImageUrl} alt="identified plant" />
            <div className={"font-bold text-green-700"}>
                {plant.plantScientificName}
            </div>
            <div className={"font-bold text-green-700"}>
                {plant.plantImageUrl}
            </div>
            {location.lat}
            <Button onClick={handlePlantFound} type={"button"} className={"bg-green-700"} >I FOUND THIS PLANT!</Button>
        </div>
        </>
    )
}