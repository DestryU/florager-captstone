import {MainCarousel} from "@/app/components/MainCarousel";
import React from "react";


export default function Home() {
    return (
        <>
            <div className={"px-[1rem] pt-[2rem] bg-green-900"}>
                <MainCarousel/>
                <div className={" md:flex-row items-center px-[.5rem] pb-[2rem] pt-[2rem] bg-green-900"}>
                    <div
                        className={"flex flex-col md:flex-row items-center justify-center rounded-2xl bg-white border-5"}>
                        <button
                            className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center size-44 rounded-full text-center m-[3rem] border-solid border-b-cyan-400 border-4"}>
                            <p className={"hover:text-cyan-400 text-white text-3xl md:text-center"}>Identify NM
                                Plants</p>
                        </button>
                        <button
                            className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem] border-solid border-b-cyan-400 border-4"}>
                            <p className={"hover:text-cyan-400 text-white text-3xl inline-block align-middle"}>Explore
                                NM Plants</p>
                        </button>
                        <button
                            className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem] border-solid border-b-cyan-400 border-4"}>
                            <p className={"hover:text-cyan-400 text-white text-3xl inline-block align-middle"}>Share NM
                                Plants</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col md:flex-row items-center justify-center px-[1.5rem] pb-[2rem] pt-[2rem]"}>
                <h4>A bit about us Florager group...
                    <p> 🌿🌼
                        **In the verdant digital garden of Florager, a remarkable cohort of developers cultivates
                        innovation. Each member, like a specialized root system, brings unique skills and perspectives
                        to nourish this botanical endeavor. The front-end wizards, with their nimble fingers on the
                        keyboard, weave intricate designs—petals of HTML, stems of CSS, and blossoms of JavaScript—into
                        a seamless user experience. Meanwhile, the back-end sorcerers conjure databases and APIs,
                        tending to the roots hidden beneath the soil—the data that fuels Florager's growth. DevOps
                        shamans chant incantations to ensure continuous integration and deployment, while UX alchemists
                        infuse empathy into every pixel. And let's not forget the QA herbalists, meticulously plucking
                        bugs like stubborn weeds. Together, this diverse cohort sows the seeds of knowledge, waters them
                        with collaboration, and watches as Florager flourishes, inviting users to explore the botanical
                        wonders of our digital world.🌿🌼</p>
                </h4>
            </div>


{/*create form page            */}
{/* Grid and Layout for sign-up          */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">


 {/*Sign up*/}
 <div className="bg-white p-6 shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form action="#" method="POST">
            <div className="mb-4">
                 <label className="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                        </div>
                        <div className="mb-4">
                  <label className="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                        </div>
                        <div className="mb-4">
                   <label className="message" className="block text-sm font-medium text-gray-700">Password</label>
                   <textarea id="message" name="message" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
                        </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send Message
                        </button>
                    </form>
                </div>



        </>
)
 }

