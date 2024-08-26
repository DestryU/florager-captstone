
import {MainCarousel} from "@/app/components/MainCarousel";

export default function Home() {
    return (
        <>
            <MainCarousel/>
            <div className={" md:flex-row items-center px-[1rem] pb-[2rem] pt-[1rem] bg-neutral-700"}>
                <div className={"flex flex-col md:flex-row items-center justify-center rounded-2xl bg-dk-green-25 border-2"}>
                <button className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center size-44 rounded-full text-center m-[3rem] drop-shadow-md border-8 border-gray-200-950 opacity-65"}>
                    <p className={"text-white text-lg md:text-center"}>Identify NM Plants</p>
                </button>
                <button className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem]"}>
                    <p className={"text-white text-lg inline-block align-middle"}>Explore NM Plants</p>
                </button>
                <button className={"flex flex-col justify-around identify-background bg-no-repeat bg-cover bg-center h-44 w-44 rounded-full text-center m-[3rem]"}>
                    <p className={"text-white text-lg inline-block align-middle"}>Share NM Plants</p>
                </button>
                </div>
            </div>
        </>
    )
}


