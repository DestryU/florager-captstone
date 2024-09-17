import{MainCarousel} from "@/app/components/MainCarousel"
import React from "react"
import SignUpPage from "@/app/components/SignUpPage";
import InteractiveMap from "@/app/components/InteractiveMap"
import Link from "next/link";
import SearchPlants from "@/app/components/SearchPlants";


export default function Home() {
    return (
        <>
                 <p className="text-3xl dark:text-white font-thin  text-center">A New Mexico-based Community for Flora Foragers</p>
            <div className={"px-[1rem] pt-[2rem] bg-white-700"}>
                <MainCarousel/>
                <div className={" md:flex-row items-center px-[.5rem] pb-[2rem] pt-[2rem] bg-white"}>
                    <div
                        className={"flex flex-col md:flex-row items-center justify-center rounded-2xl bg-white"}>
                        <button
                            className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center size-44 rounded-full text-center m-[3rem] border-solid border-b-white border-4"}>

                            <p className={"hover:text-gray-300 text-white text-3xl font-bold md:text-center"}><Link
                                href="/identifier">Identify Plants</Link></p>
                        </button>
                        <button
                            className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem] border-solid border-b-white border-4"}>
                            <p className={"hover:text-gray-300 text-white text-3xl font-bold inline-block align-middle"}>
                                <Link href="/interactive-map">Explore Plants</Link></p>
                        </button>
                        <button
                            className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem] border-solid border-b-white border-4"}>
                            <p className={"hover:text-gray-300 text-white text-3xl font-bold inline-block align-middle"}>
                                <Link href="/sign-up">Share Plants</Link></p>
                        </button>
                    </div>
                </div>
            </div>
            <div className={"mt-50 mb-48"}>
                <SignUpPage/>
            </div>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2"} id={"#explore-home"}>
                <div className={"flex flex-col"}>
                    <h2 className={"text-green-700 font-black text-3xl md:text-5xl md:text-left ml-10"}>Explore New
                        Mexico Plants</h2>
                    <h3 className={"mt-4 mb-4 text-3xl font-thin md:text-left ml-10"}>Anyone can search our database of
                        New Mexico plants.</h3>
                    <h3 className={"mb-4 text-3xl font-thin text-center mt-[-10]"}>Registered users can collect favorites on their profile.</h3>

                    <SearchPlants/>
                </div>
            </div>

            <h2 className={"mx-auto text-center text-green-700 font-black text-5xl"}>Share New Mexico Plants</h2>

            <h3 className={"mt-4 mb-4 text-3xl font-thin text-center"}>Registered users can share plant finds and
                comments on our interactive map.</h3>
            <InteractiveMap/>
        </>
    )
}
