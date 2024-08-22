'use client'
import ModalTemplate from "@/app/components/ModalTemplate";


export default function Hotbar() {
    return (
        <>
            <a href="#"
               className="flex justify-center items-center w-full md:w-1/3 h-[100px] p-5 bg-blue-200 border border-gray-200 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 pointer-events-auto">
                <div className="flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Florager Map Tools
                    </h5>
                    <div className="flex flex-row">
                    <ModalTemplate/>
                    <ModalTemplate/>
                    <ModalTemplate/>
                    <ModalTemplate/>
                    </div>
                </div>
            </a>
        </>
    )
}