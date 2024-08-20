'use client'

export default function () {

    return (
        <>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2"} id={"#sign_up"}>
                <img className={"md:mt-auto"} src={"/share2.png"} height={1280} width={1080}
                     alt={"four people foraging"}/>
                <div className={"flex flex-col"}>

                    <h3 className={"text-green-700 md:text-6xl text-3xl font-black text-center mt-auto pt-32"}>Benefits
                        of
                        a</h3>
                    <h1 className={"text-green-700 med:text-left md:text-8xl text-5xl font-black text-center md:mt-auto"}>Free
                        Profile</h1>
                    <p className={"sm:text-center text-2xl pt-7 pl-8 md:mt-auto"}>
                        New Mexico Floragers website is more fun with a free profile!</p>
                    <p className={"sm:text-center text-2xl pl-8 pt-2"}>Enrich your experience with
                        these features:</p>
                    <ul className={"sell-it sm:text-base sm:text-center med:text-left md:text-2xl text-italic font-bold pl-8 pt-4 pb-8 md:mt-auto"}>
                        <li><em>Use the PlanetNet plant identification tool</em></li>
                        <li><em>Collect your plant pics on your profile</em></li>
                        <li><em>Comment on identified plants</em></li>
                        <li><em>Share your plant pics on our interactive map</em></li>
                    </ul>
                    <button type="button" className=" self-center h-20 w-80 mt-2 md:mt-auto px-8 py-6 text-2xl font-medium text-white bg-green-700
                    hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-green-400 rounded-lg text-center
                    dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">CREATE PROFILE</button>
                </div>
            </div>
        </>
    )
}

