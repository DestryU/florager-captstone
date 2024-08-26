
"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import {UploadPhoto} from "@/app/components/UploadPhoto"

export function ProfilePicButton() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)} className={"mx-auto bg-green-700 border-none hover:bg-green-200"}>Upload Profile Picture</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Upload from Your Device</Modal.Header>
                <Modal.Body>
                    <UploadPhoto></UploadPhoto>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)} className={"bg-green-700 hover:bg-green-200"}>Set as Profile Pic</Button>
                    <Button color="green" onClick={() => setOpenModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProfilePicButton;
