"use client";
import { Card } from "flowbite-react";
import Image from "next/image";


export async function PlantCard() {

    return (
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <Card className="max-w-sm">
                <Image width={500} height={500} src="/poppy1.png" alt="image 1" className="w-full h-auto"/>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card className="max-w-sm">
                <Image width={500} height={500} src="/poppy2.png" alt="image 1" className="w-full h-auto"/>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card className="max-w-sm">
                <Image width={500} height={500} src="/poppy1.png" alt="image 1" className="w-full h-auto"/>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </div>
    );
}

