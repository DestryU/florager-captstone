import {getSession} from "@/app/utils/session.utils";
import {redirect} from "next/navigation";
import {UpdateProfileForm} from "@/app/profile/UpdateProfileForm";
import {getProfileByProfileId} from "@/app/utils/models/profile/profile.model";

type Props = {
    params:{
        profileUserName: string
    }
}
export default async function (props: Props) {

    const {profileUserName} = props.params
    const session = await getSession()
    const signedInUser = session?.profile
    const profile = await getProfileByProfileId(profileUserName)


    const isSignedInUser = signedInUser?.profileId === profile.profileId

    return (
        <>
            <main className="container lg:w-2/3 grid mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl p-4 font-bold">{profile.profileUserName}</h1>
                    {isSignedInUser &&
                        <UpdateProfileForm authorization={session?.authorization} profile={profile} />
                    }
                </div>

          {/*      {WILL NEED TO ADD FIND CARD ON PROFILE WHEN READY/*{threads.map((thread) => <ThreadCard thread={thread} key={thread.threadId} />)}*!/*/}
            </main>
        </>
    )
}

/*

export async function getProfileAndThreads(profileName: string) : Promise<{profile-first-take: Profile, threads: Thread[]}> {
    const profile-first-take = await fetchProfileByProfileName(profileName)
    if(profile-first-take === null) {
        return(redirect('/404'))
    }
    const threads = await fetchThreadsByProfileId(profile-first-take.profileId)
    return {profile-first-take, threads}
}
*/


/*<div className={"grid sm:grid-cols-1 px-2.5 md:grid-cols-2 gap-5"}>
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
    </div>*/

   {/* <div className={"bg-green-700 rounded-lg p-5"}>
        <div className={"grid grid-cols-1 py-5 px-20"}>
            <button type={"button"}
                    className={"bg-white font-bold hover:bg-gray-400 focus:outline-none rounded-full text-4xl text-green-700 py-2.5 text-center me-2 mb-2"}
                    onClick={() => {
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

</div>*/}