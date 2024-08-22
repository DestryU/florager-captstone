'use client'

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function ModalTemplate() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button gradientDuoTone="greenToBlue" onClick={() => setOpenModal(true)} className ="max-w-max">Click</Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        This section is going to contain any code or information that we will want to use as a part of this particular modal.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        This section is a footer for the modal, and can be changed as needed if there are any kinds of sections or additonal commands that need to be executed.
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}



