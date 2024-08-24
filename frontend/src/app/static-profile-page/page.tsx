'use client'
import {ProfilePicButton} from "@/app/components/ProfilePicButton";
import {UpdateSettings} from "@/app/components/UpdateSettings";
import IdentifyPage from "@/app/identifier/page";
import React from "react";

export default function staticProfilePage () {

    return (
        <>

                {/*//add header to page*/}
                <div className={"grid sm:grid-cols-1 px-2.5 md:grid-cols-2 gap-5"}>
                    <div className={"bg-white rounded-lg items-center"}>
                        <div className={"p-5 mx-auto"}>
                            <img className={"mx-auto h-36 w-36 rounded-full"} src={"/happybush.png"}
                                 alt="avatar1"/>
                        </div>

                        <div className={"p-10"}>
                        <ProfilePicButton/>

                        </div>

                        <div className={"py-5 mx-auto"}>
                            <p className={"bg-white text-2xl text-green-700 text-center font-bold"}>FlowerLoverJane</p>
                            <p className={"bg-white text-2xl text-green-700 text-center font-bold"}>She/Her</p>
                        </div>

                        <div className={"py-5 mx-20"}>
                            <UpdateSettings/>

                        </div>
                    </div>

                    <div className={"bg-green-700 rounded-lg p-5"}>
                        <div className={"grid grid-cols-1 py-5 px-20"}>
                            <button type={"button"}
                                    className={"bg-white font-bold hover:bg-gray-400 focus:outline-none rounded-full text-4xl text-green-700 py-2.5 text-center me-2 mb-2"} onClick={() => {
                                window.location.href = "/identifier";
                            }}>
                                Identify
                            </button>
                        </div>
                        <div className={"gap-5 py-2 px-5 flex items-start"}>
                            <h2 className={"text-4xl font-bold text-white text-left"}>My Plants</h2>
                        </div>
                        <div className={"grid grid-cols-2 gap-5 px-2 py-10"}>
                            <img className={"w-auto h-auto rounded-full border-2"} src={"/datura.png"} alt="datura"/>
                            <img className={"w-auto h-auto rounded-full border-2"} src={"/datura.png"} alt="datura"/>
                            <img className={"w-auto h-auto rounded-full border-2"} src={"/poppy2.png"} alt="poppy2"/>
                            <img className={"w-auto h-auto rounded-full border-2"} src={"/poppy1.png"} alt="poppy1"/>
                            <img className={"w-auto h-auto rounded-full border-2"} src={"/sunflower.png"}
                                 alt="sunflower"/>
                            <img className="w-auto h-auto rounded-full border-2" src={"/poppy2.png"} alt="poppy2"/>
                        </div>
                    </div>

                </div>
        </>
    );
}