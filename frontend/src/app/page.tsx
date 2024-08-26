import {MainCarousel} from "@/app/components/MainCarousel";


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
        </>
    )
}

