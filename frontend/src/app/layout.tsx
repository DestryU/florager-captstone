import type { Metadata } from 'next'
import './globals.css'

import {Navigation} from "@/app/components/Navigation";
import {Footer} from "@/app/components/Footer"



import 'mapbox-gl/dist/mapbox-gl.css'



export const metadata: Metadata = {
    title: 'NM Floragers',
    description: 'A website for discovering the plants-mrkDEL of New Mexico',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <title>New Mexico Floragers</title>
            <link rel="icon" type="image/png" href="/favicon.io"/>
        </head>
        <body>
        <Navigation/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}