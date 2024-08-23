
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function MainCarousel() {
    return (
        <div className="main-carousel">
            <Carousel slideInterval={7000}>
                <Image src={"/images/NMpic2.jpg"} alt={"NM pic"} height={900} width={600}/>
                <Image src="/images/NMpic7.jpg" alt="NM pic" height={900} width={600}/>
                <Image src="/images/NMpic10.jpg" alt="NM pic" height={900} width={600}/>
                <Image src="/images/NMpic9.jpg" alt="NM pic" height={900} width={600}/>
            </Carousel>
        </div>
    );
}
