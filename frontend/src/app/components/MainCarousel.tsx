
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function MainCarousel() {
    return (
        <div className="main-carousel">
            <Carousel pauseOnHover>
                <Image src="/images/NMpic2.jpg" duration-15000 alt="NM pic" height={1000} width={600}/>
                <Image src="/images/NMpic7.jpg" duration-15000 alt="NM pic" height={600} width={600}/>
                <Image src="/images/NMpic10.jpg" duration-15000 alt="NM pic" height={600} width={600}/>
                <Image src="/images/NMpic9.jpg" duration-15000 alt="NM pic" height={600} width={600}/>
            </Carousel>
        </div>
    );
}
