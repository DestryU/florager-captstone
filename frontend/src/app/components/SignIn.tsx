"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export function SignIn() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <Button className="bg-green-700 hover:bg-gray-300 focus:ring-2 focus:ring-green-400" onClick={() => setOpenModal(true)} >Sign In</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 bg-white">
                        <h3 className="text-xl font-medium text-green-700 dark:text-white">Sign in to New Mexico Floragers</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput className="text-green-700"
                                id="email"
                                placeholder="Example: jane@iloveflowers.org"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Username" />
                            </div>
                            <TextInput id="username" type="username"  placeholder="Example: FlowerLoverJane" required />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-green-700 hover:underline dark:text-green-500">
                                Forgot Username?
                            </a>
                        </div>
                        <div className="w-full">
                            <Button className={"button bg-green-700"}>Sign In</Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a href="#" className="text-green-700 hover:underline dark:text-green-500">
                                Create Your Free Profile
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

