'use client'

import Hotbar from './Hotbar'
import ModalTemplate from './ModalTemplate'

export default function Overlay () {
    return (
        <>
            <section id='thisId' className={"fixed h-full w-full grid z-[9999] pointer-events-none"}>
                <Hotbar />
            </section>
        </>
    )
}