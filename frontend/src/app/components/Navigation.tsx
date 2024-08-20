// Navigation Menu
'use client'
import { Dropdown, Navbar } from "flowbite-react";
import {SignIn} from "@/app/components/SignIn";
export function Navigation ()
{
        return (
                <>
                   <Navbar fluid rounded>
                      <img src="/nmf-logo.png" className="mr-3 h-20 sm:h-20" alt="NM Floragers logo" />
                        <span className="self-center whitespace-nowrap bg-transparent text-3xl font-black text-green-700 dark:text-white">New Mexico Floragers</span>
                         <div className="flex md:order-2">
                            <Navbar.Toggle />
                         </div>
                            <Navbar.Collapse>
                                <Navbar.Link href="#" active></Navbar.Link>
                                <div className={"flex flex-wrap gap-4 text-3xl text-green-700 hover:text-green-400 font-black bg-transparent"}>
                                    <Dropdown label="Identify" inline>
                                        <Dropdown.Item>Identify Plants</Dropdown.Item>
                                    </Dropdown>

                                    <Dropdown label="Explore" inline>
                                        <Dropdown.Item>Explore Plants</Dropdown.Item>
                                        <Dropdown.Item>Explore Map</Dropdown.Item>
                                    </Dropdown>

                                    <Dropdown label="Share" inline>
                                        <Dropdown.Item>Sign-up</Dropdown.Item>
                                    </Dropdown>
                                    <SignIn/>

                                </div>

                            </Navbar.Collapse>
                  </Navbar>
                </>
               )
}


