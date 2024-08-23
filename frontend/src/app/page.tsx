
import {MainCarousel} from "@/app/components/MainCarousel";

export default function Home() {
    return (
        <>
            <MainCarousel/>
            <div className={" md:flex-row items-center px-[1.5rem] pb-[2rem] pt-[2rem] bg-green-900"}>
                <div className={"flex flex-col md:flex-row items-center justify-center rounded-2xl bg-white border-5"}>
                <button className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center size-44 rounded-full text-center m-[3rem] border-solid border-b-cyan-400 border-4"}>
                    <p className={"text-white text-2xl md:text-center"}>Identify NM Plants</p>
                </button>
                <button className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem] border-solid border-b-cyan-400 border-4"}>
                    <p className={"text-white text-2xl inline-block align-middle"}>Explore NM Plants</p>
                </button>
                <button className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem] border-solid border-b-cyan-400 border-4"}>
                    <p className={"text-white lg:text-2xl inline-block align-middle"}>Share NM Plants</p>
                </button>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}


