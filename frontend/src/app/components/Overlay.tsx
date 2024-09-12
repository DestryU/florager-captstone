'use client'

import Hotbar from './Hotbar'
import ModalTemplate from './ModalTemplate'
import {Find} from "@/utils/actions/find/find.validator";

type overlayProps = {
    finds: Find[]
}

export default function Overlay() {




    return (
        <>
            <section id='thisId' className={"fixed h-full w-full flex justify-center items-end p-12 z-[9999] pointer-events-none"}>
                <Hotbar />
                <p></p>

            </section>
        </>
    )
}