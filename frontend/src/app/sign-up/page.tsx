
import Link from "next/link";

export default function signUpPage() {

    return (
        <>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2"} id={"#sign_up"}>
                <img className={"md:mt-auto"} src={"/share2.png"} height={1280} width={1080}
                     alt={"four people foraging"}/>
                <div className={"flex flex-col"}>

                    <h3 className={"text-green-700 md:text-8xl text-5xl font-black text-center mt-auto pt-32"}>Benefits
                        of
                        a</h3>
                    <h1 className={"text-green-700 med:text-left md:text-8xl text-5xl font-black text-center md:mt-auto"}>Free
                        Profile</h1>
                    <p className={"sm:text-center font-thin text-3xl pt-7 pl-8 md:mt-auto"}>
                        Welcome to New Mexico Floragers!</p>
                    <p className={"sm:text-center font-thin text-3xl pt-7 pl-8 mt-[-20]"}>Registered users can:</p>

                    <ul className={"sell-it text-xl text-center med:text-left md:text-3xl text-italic font-bold pl-8 pt-4 pb-8 md:mt-auto"}>
                        <li><em>IDENTIFY plants you find using PlantNet</em></li>
                        <li><em>EXPLORE plant finds and comments from our community</em></li>
                        <li><em>SHARE your own plant finds and comments on our map</em></li>

                    </ul>
                    <button type="button" className="self-center h-20 w-80 mt-2 md:mt-auto px-8 py-6 text-3xl text-white hover:text-gray-300 bg-green-700
                    focus:ring-4 focus:outline-none focus:ring-green-400 rounded-lg text-center
                    dark:bg-green-400 dark:focus:ring-green-800"><Link href={"/sign-up/create-profile"}>CREATE
                        PROFILE</Link></button>
                </div>
            </div>
        </>
    )
}