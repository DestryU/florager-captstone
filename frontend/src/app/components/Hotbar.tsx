'use client'
import ButtonTemplate from './ButtonTemplate';

export default function Hotbar() {
    return (
        <>

            <div className={"flex justify-between items-center w-full md:w-1/3 h-[100px] bg-red-600 p-5"}>
                <ButtonTemplate />
                <ButtonTemplate />
                <ButtonTemplate />
                <ButtonTemplate />
                <ButtonTemplate />
            </div>
        </>
    )
}