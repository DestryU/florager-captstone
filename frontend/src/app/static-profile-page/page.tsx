'use client'

import {isContainer} from "postcss-selector-parser";

export default function () {

    return (
        <>

            <section className="container mx-auto max-w-screen-xl">
                <div className="grid sm:grid-cols-1 px-2.5 md:grid-cols-2 gap-5">
                    <div className="bg-green-900 rounded-lg p-5">
                        <div className={"px-5 py-5"}>
                            <img className="w-90 h-90 rounded-full" src={"/happybush.png"}
                                 alt="avatar1"/>
                        </div>
                        <div className={"py-5 px-20"}>
                            <button type="button"
                                    className="bg-white font-bold text-green-900 hover:bg-gray-400 text-2xl focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2">Update
                                Profile Picture
                            </button>

                        </div>
                        <div className={"px-20"}>
                            <p className="bg-green-900 text-2xl text-white text-center font-bold">FlowerLoverJane</p>
                            <p className="pb-5 bg-green-900 text-2xl text-white text-center font-bold">She/Her</p>
                        </div>
                        {/*Settings Start */}
                        <div className={"bg-white rounded-lg p-5"}>
                            <div className="py-5 gap-5">
                                <h3 className="text-3xl font-bold text-green-900 text-left">Settings</h3>
                            </div>
                            <div>
                                <p className="p-3 mt-5 rounded-lg bg-green-900 text-white font-bold text-left text-lg">FlowerLoverJane</p>
                            </div>
                            <div>
                                <p className="p-3 mt-5 rounded-lg bg-green-900 text-white font-bold text-left text-lg">Pronouns</p>
                            </div>
                            <div>
                                <p className="p-3 mt-5 rounded-lg bg-green-900 text-white font-bold text-left text-lg">Email
                                    Address</p>
                            </div>
                            <div>
                                <button type="button"
                                        className="py-5 px-16 mt-5 font-bold text-white bg-green-900 hover:bg-gray-400 text-2xl focus:ring-4 focus:ring-blue-300 rounded-full text-center me-2 mb-2">Edit/Save
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="bg-green-900 rounded-lg p-5">
                        <div className={"grid grid-cols-1 py-5 px-20"}>
                            <button type="button"
                                    className="bg-white font-bold hover:bg-gray-400 focus:outline-none rounded-full text-4xl text-green-900 py-2.5 text-center me-2 mb-2">Identify
                            </button>
                        </div>
                        <div className={"gap-5 py-2 px-5 flex items-start"}>
                            <h2 className="text-4xl font-bold text-white text-left">My Plants</h2>
                        </div>
                        <div className={"grid grid-cols-2 gap-5 px-2 py-10"}>
                            <img className="w-auto h-auto rounded-full border-2" src={"/datura.png"} alt="datura"/>
                            <img className="w-auto h-auto rounded-full border-2" src={"/datura.png"} alt="datura"/>
                            <img className="w-auto h-auto rounded-full border-2" src={"/poppy2.png"} alt="poppy2"/>
                            <img className="w-auto h-auto rounded-full border-2" src={"/poppy1.png"} alt="poppy1"/>
                            <img className="w-auto h-auto rounded-full border-2" src={"/sunflower.png"} alt="sunflower"/>
                            <img className="w-auto h-auto rounded-full border-2" src={"/poppy2.png"} alt="poppy2"/>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}