'use client'

export default function () {

    return (
        <>
            <div className={"container mx-auto grid grid-cols-2"} id={"#sign_up"}>
                <div>
                    <h3 className={"text-green-900 md:text-6xl text-3xl font-bold pl-8 pt-48 md:mt-auto"}>Benefits of
                        a</h3>
                    <h1 className={"text-green-900 md:text-8xl text-5xl font-bold pl-8 md:mt-auto"}>Free Profile</h1>
                    <p className={"self-center text-2xl pl-8 pt-7 md:mt-auto"}>
                        New Mexico Floragers website is more fun with a free profile!</p>
                    <p className={"self-center text-2xl pl-8 md:mt-auto"}>Enrich your experience with these
                        features:</p>
                    <ul className={"sell-it text-2xl text-italic font-bold pl-8 pt-7 md:mt-auto"}>
                        <li><em>~ Use the PlanetNet plant identification tool</em></li>
                        <li><em>~ Collect your plant pics on your profile</em></li>
                        <li><em>~ Comment on identified plants</em></li>
                        <li><em>~ Share your plant pics on our interactive map</em></li>
                    </ul>
                    <button type="button" className="mt-10 md:mt-auto px-12 py-8 text-2xl font-medium text-white bg-green-900
                    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CREATE PROFILE
                    </button>
                </div>
                <div className={"container"}>
                    <img className={"pt-48"} src={"/share.png"} height={1280} width={1080}
                         alt={"four people foraging"}/>

                </div>
            </div>
        </>
    )
}

