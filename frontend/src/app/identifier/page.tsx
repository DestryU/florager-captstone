
'use client'
import React from 'react';
import { IdentifyUpload } from '@/app/components/IdentifyUpload';

export default function IdentifyPage() {

    return (
        <>
            {/*{/!*add header to page*!/}*/}

                <div>
                <h1 className={"mx-auto mt-10 font-bold text-4xl text-green-700 text-center py-5"}>Upload a .jpg or .png Image File Below</h1>

                <div className={"mx-auto ml-24 flex flex-wrap justify-center"}>
                {<IdentifyUpload></IdentifyUpload>}
                </div>

                <button className={"mx-auto flex flex-wrap justify-center p-5 border-4 border-green-300 bg-green-700 text-white mt-10 text-2xl rounded-lg font-bold"}>Identify Plant</button>
                </div>

        </>
    )
}

