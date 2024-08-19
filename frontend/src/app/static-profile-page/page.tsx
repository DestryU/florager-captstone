'use client'

// import {isContainer} from "postcss-selector-parser";

export default function () {

    return (
        <>

            <section className="container mx-auto max-w-screen-xl">
                <div className="grid sm:grid-cols-1 px-2.5 md:grid-cols-2 gap-5">
                    <div className="bg-white rounded-lg p-5">
                        <div className={"px-20 py-5"}>
                            <img className="w-72 h-64 rounded-full" src={"/happybush.png"}
                                 alt="avatar1"/>
                        </div>
                        <div className={"py-5 px-20"}>
                            <button type="button"
                                    className="bg-green-900 font-bold text-white hover:bg-gray-400 text-2xl focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2">Update
                                Profile Picture
                            </button>

                        </div>
                        <div className={"px-20 py-5"}>
                            <p className="bg-white text-2xl text-green-900 text-center font-bold">FlowerLoverJane</p>
                            <p className="bg-white text-2xl text-green-900 text-center font-bold">She/Her</p>
                        </div>


                        {/*Settings Start */}
                        <div className={"bg-white rounded-lg p-5"}>
                            <div className="py-5 gap-5">
                                <h3 className="text-3xl font-bold text-green-900 text-left">Settings</h3>
                            </div>

                            {/*Settings Form */}


                            <form className="max-w-md mx-auto">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="email" name="floating_email" id="floating_email"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_email"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                        address</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="password" name="floating_password" id="floating_password"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_password"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_user_name" id="floating_user_name"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="floating_user_name"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_pronouns" id="floating_pronouns"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="floating_company"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pronouns</label>
                                    </div>
                                </div>
                                <button type="submit"
                                        className="text-white bg-green-900 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                                </button>
                            </form>

                            {/*
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
*/}
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
                            <img className="w-auto h-auto rounded-full border-2" src={"/sunflower.png"}
                                 alt="sunflower"/>
                            <img className="w-auto h-auto rounded-full border-2" src={"/poppy2.png"} alt="poppy2"/>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}