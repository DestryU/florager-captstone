'use client'

export default function () {

    return (
        <>
            <div className={"container mt-36 mx-auto"} id={"#sign-up"}>
                <h1 className={"text-green-700 med:text-left md:text-8xl text-5xl font-black text-center md:mt-auto"}>
                    Create Profile</h1>
                <form className="max-w-sm mx-auto pt-28">
                    <div className="mb-5">
                        <label htmlFor="username-success"
                               className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Create
                            Username</label>
                        <input type="text" id="username-success"
                               className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400
                                   placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                               placeholder="Example: FlowerLoverJane"/>
                        <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span
                            className="font-medium">Alright!</span> Username available!</p>
                    </div>
                </form>
                <form className="max-w-sm mx-auto">
                    <div className="mb-5">

                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Create
                            Password</label>
                        <input type="text" id="password"
                               className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                               placeholder="8 characters"/>
                        <p className="mt-2 text-sm text-green-600 dark:text-green-500"></p>
                    </div>
                </form>

                <form className="max-w-sm mx-auto">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Email</label>
                        <input type="email" id="email" aria-describedby="helper-text-explanation"
                               className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                               placeholder="Example: jane@iloveflowers.org"/>

                        <p id="helper-text-explanation"
                           className="mt-2 text-sm text-green-700 dark:text-green-400 font-bold">We’ll never share your
                            details.</p>
                </form>
            </div>
        </>
)
}

