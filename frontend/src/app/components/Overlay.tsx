'use client'

import Hotbar from './Hotbar'
import ModalTemplate from './ModalTemplate'

export default function Overlay () {
    return (
        <>
            <section id='thisId' className={"fixed h-full w-full flex justify-center items-end p-12 z-[9999] pointer-events-none"}>
                <Hotbar />

            </section>
        </>
    )
}