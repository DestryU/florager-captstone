"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import {SignIn} from "@/app/components/SignIn";

export function SignInModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button className={"bg-green-700 hover:bg-green-500"} onClick={() => setOpenModal(true)}>Sign In</Button>
                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <SignIn/>
            </Modal>
        </>
    );
}