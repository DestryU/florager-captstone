import type { Metadata } from 'next'
import './globals.css'
import {Navigation} from "@/app/components/Navigation";
import {Footer} from "@/app/components/Footer"
import 'mapbox-gl/dist/mapbox-gl.css'
import {getSession} from "@/utils/session.utils";
import {signOut} from "@/utils/actions/sign-out/sign-out.action";

export const metadata: Metadata = {
    title: 'NM Floragers',
    description: 'A website for discovering the plants-mrkDEL of New Mexico',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default async function RootLayout(props : RootLayoutProps) {
    const { children } = props
async function signOutClicked() {
        await signOut()
}
        const loggedInUser = await getSession()
console.log(loggedInUser)
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <title>New Mexico Floragers</title>
            <link rel="icon" type="image/png" href="/favicon.io"/>
        </head>
        <body className="flex flex-col min-h-screen">
        <Navigation loggedInProfile={loggedInUser?.profile || null}/>
        <main className="flex-grow">
        {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}