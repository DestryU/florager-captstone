"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";


/*
This is from the Flowbite template for the Bottom Drawer.
Each of the button in this drawer should call a different component,
ideally as a modal or other overlay.

I'm stuck because I don't full understand how to use modals, or call
components that range from being client- to server-side
 */
export function MapDrawer() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <div>
                <Button gradientDuoTone="greenToBlue" onClick={() => setIsOpen(true)}>Show Map Features</Button>
            </div>
            <Drawer open={isOpen} onClose={handleClose} position="bottom" className="pointer-events-auto bg-green-700">
                <Drawer.Header/>
                <Drawer.Items>
                    <div className={"flex flex-col md:flex-row md:justify-center bg-cyan-50 h-[20vh] md:h-[16vh] w-full rounded-2xl p-8"}>
                        <Button gradientDuoTone={"greenToBlue"} className={"flex items-center mx-6"}>Recent Finds</Button>
                        <Button gradientDuoTone={"greenToBlue"} className={"flex items-center mx-6"}>Identify New</Button>
                        <Button gradientDuoTone={"greenToBlue"} className={"flex items-center mx-6"}>My Discoveries</Button>
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    );
}
