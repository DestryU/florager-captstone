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
                <div className={"grid sm:grid-cols-1 md:grid-cols-2 px-10 gap-5 content-center"}>
                    <div className={"bg-white rounded-lg items-center"}>
                        <div className={"p-5 mx-auto"}>
                        </div>

                        <div className={"py-5 mx-20 mb-10"}>
                            {/*<UpdateSettings/>*/}
                            <UpdateProfileForm authorization={loggedInUser.authorization} profile={profile} />

                        </div>

                    </div>

                </div>
        </>
    );
}