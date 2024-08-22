"use client";

import { header } from "flowbite-react";
import Image from "next/image";


export function header() {
    return (
<div className="header">
<div className="bg-green-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">FLORAGER</h1>
        <header>
            <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#identify" className="hover:text-white">Identify</a></li>
                <li><a href="#service" className="hover:text-white">Explore</a></li>
                <li><a href="#contact" className="hover:text-white">Share</a></li>
            </ul>
        </header>
    </div>
<div/>
</div>
</div>
)
}