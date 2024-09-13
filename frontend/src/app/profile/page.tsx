'use server'
import React from "react";
import {UpdateProfileForm} from "@/app/profile/UpdateProfileForm";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";



export default async function ProfilePage () {
    const loggedInUser = await getSession()

    if (!loggedInUser) {
        redirect ('/')
    }

    const profile= await getProfileByProfileId(loggedInUser.profile.profileId)
    console.log(loggedInUser)
    return (
        <>


                {/*//add header to page*/}
                <div className={"grid sm:grid-cols-1 px-2.5 md:grid-cols-2 gap-5"}>
                    <div className={"bg-white rounded-lg items-center"}>
                        <div className={"p-5 mx-auto"}>
                        </div>

                        <div className={"py-5 mx-20"}>
                            {/*<UpdateSettings/>*/}
                            <UpdateProfileForm authorization={loggedInUser.authorization} profile={profile} />

                        </div>
                    </div>

                    {/*<div className={"bg-green-700 rounded-lg p-5"}>
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
                    </div>*/}

                </div>
        </>
    );
}