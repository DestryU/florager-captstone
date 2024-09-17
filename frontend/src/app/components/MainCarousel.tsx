
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function MainCarousel() {
    return (
        <div className="main-carousel">
            <Carousel pauseOnHover slideInterval={7000}>
                <Image src={"/images/NMpic2.jpg"} alt={"NM pic"} height={600} width={600}/>
                <Image src={"/images/NMpic7.jpg"} alt={"NM pic"} height={600} width={600}/>
                <Image src={"/images/NMpic10.jpg"} alt={"NM pic"} height={600} width={600}/>
                <Image src={"/images/NMpic12.png"} alt={"NM pic"} height={600} width={600}/>
                <Image src={"/images/NMpic13.png"} alt={"NM pic"} height={600} width={600}/>
                <Image src={"/images/NMpic15.png"} alt={"NM pic"} height={600} width={600}/>
            </Carousel>
        </div>
    );
}


