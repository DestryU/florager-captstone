'use client'
import ModalTemplate from "@/app/components/ModalTemplate";
import {fetchFindRecent} from "@/utils/actions/find/find.action";


export default function Hotbar() {

    // const table = fetchFindRecent()
    //
    // console.log(table)

    // const table = fetchFindRecent()
    // console.log(table)

    return (
        <>
            <a href="#"
               className="flex justify-center items-center w-full md:w-1/3 h-[100px] p-5 mb-[8rem] bg-blue-200 border border-gray-200 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 pointer-events-auto">
                <div className="flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">



                    </h5>
                    <div className="flex flex-row">
                    <ModalTemplate/>
                    </div>
                </div>
            </a>
        </>
    )
}