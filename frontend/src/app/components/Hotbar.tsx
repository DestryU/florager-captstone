'use client'
import ModalTemplate from "@/app/components/ModalTemplate";


export default function Hotbar() {
    return (
        <>


            <div className="
            justify-self-center self-end
            flex justify-center items-center
            w-full md:w-2/3 lg:w-1/2 xl:w-1/3
            h-[20vh] md:h-[18vh] lg:h-[15vh]
            mb-0 md:mb-8 lg:mb-5
            border-4 border-green-900 border-opacity-45 bg-blue-200 rounded-xl">
                <div className="
                flex flex-col justify-center items-center">
                    <h5 className="
                    mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Florager Map Tools
                    </h5>
                    <div className="
                    flex flex-row">
                        <ModalTemplate/>
                        <ModalTemplate/>
                        <ModalTemplate/>
                        <ModalTemplate/>
                    </div>
                </div>
            </div>
        </>
    )
}