// Navigation Menu
'use client'
import { Dropdown, Navbar } from "flowbite-react";
export function Navigation ()
{
    console.log(Navigation)

        return (
                <>
                   <Navbar fluid rounded>
                      <img src="/nmf-logo.png" className="mr-3 h-6 sm:h-9" alt="NM Floragers logo" />
                        <span className="self-center whitespace-nowrap bg-transparent text-3xl font-black text-green-700 dark:text-white">NM Floragers</span>
                         <div className="flex md:order-2">
                            <Navbar.Toggle />
                         </div>
                            <Navbar.Collapse>
                                <Navbar.Link href="#" active></Navbar.Link>
                                <div className={"flex flex-wrap gap-4 text-3xl text-green-700 hover:text-amber-900 font-black bg-transparent"}>
                                    <Navbar.Link href="#identify">Identify
                                    </Navbar.Link>
                                         <Dropdown inline label={<Navbar.Link href="#explore">Explore</Navbar.Link>} arrowIcon={false}>
                                             <Dropdown inline label={<Navbar.Link href="#explore-plants">Explore Plants</Navbar.Link>} arrowIcon={false}>
                                             </Dropdown>
                                             <Dropdown inline label={<Navbar.Link href="#explore-map">Explore Map</Navbar.Link>} arrowIcon={false}>
                                             </Dropdown>
                                         </Dropdown>
                                         <Dropdown inline label= { <Navbar.Link href="#share">Share</Navbar.Link>} arrowIcon={false}>
                                              <Dropdown inline label= { <Navbar.Link href="#sign-up">Sign-up</Navbar.Link>} arrowIcon={false}>
                                              </Dropdown>
                                              <Dropdown inline label={ <Navbar.Link href="#sign-in">Sign-in</Navbar.Link>} arrowIcon={false}>
                                              </Dropdown>
                                         </Dropdown>
                                </div>
                            </Navbar.Collapse>
                  </Navbar>
                </>
               )
}


