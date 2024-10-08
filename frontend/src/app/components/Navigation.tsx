// Navigation Menu
'use client'
import {Button, Dropdown, Navbar} from "flowbite-react";
import {SignInModal} from "@/app/components/SignInModal";
import Link from "next/link";
import {Profile} from "@/utils/actions/profile/profile.validator";
import {SignOutButton} from "@/app/components/SignOutButton";
type NavProps = {
    loggedInProfile: Profile | null
}
export function Navigation (props: NavProps)
{
  const {loggedInProfile} = props
    console.log(loggedInProfile)
        return (
                <>
                   <Navbar fluid rounded>
                      <Link href={"/"}> <img src="/nmf-logo.png" className="mr-3 h-20 sm:h-20" alt="NM Floragers logo"/></Link>
                        <span className="self-center whitespace-nowrap bg-transparent text-3xl font-black text-green-700 dark:text-white">New Mexico Floragers</span>
                         <div className="flex md:order-2">
                            <Navbar.Toggle />
                         </div>
                            <Navbar.Collapse>
                                <Navbar.Link href="#" active></Navbar.Link>
                                <div className={"flex flex-wrap gap-4 text-3xl text-green-700 hover:text-green-400 font-black bg-transparent"}>
                                    <Dropdown label="Identify" inline>
                                        <Dropdown.Item>{loggedInProfile ? <Navbar.Link href="/identifier">Identify Plants</Navbar.Link> : 'Please Sign In'}</Dropdown.Item>
                                    </Dropdown>

                                    <Dropdown label="Explore" inline>
                                        <Dropdown.Item><Navbar.Link href="/plant-cards">Explore Plants</Navbar.Link></Dropdown.Item>
                                        <Dropdown.Item><Navbar.Link href="/interactive-map">Explore Map</Navbar.Link></Dropdown.Item>
                                    </Dropdown>

                                    <Dropdown label="Share" inline>
                                        <Dropdown.Item> <Navbar.Link href="/sign-up">Sign Up</Navbar.Link></Dropdown.Item>
                                    </Dropdown>
                                    {loggedInProfile ?
                                        <><SignOutButton/>  <Link href={"/profile"}><Button className={"bg-green-700"}>Profile</Button></Link></>
                                        : <SignInModal/>}

                                </div>

                            </Navbar.Collapse>
                  </Navbar>
                </>
               )
}


