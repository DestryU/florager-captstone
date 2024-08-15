'use client'

import Hotbar from './Hotbar'
import ModalTemplate from './ModalTemplate'

export default function Overlay () {
    return (
        <>
            <section className={"fixed h-full w-full flex justify-center items-end p-12"}>
                <Hotbar />
                <ModalTemplate />




            </section>
        </>
    )
}