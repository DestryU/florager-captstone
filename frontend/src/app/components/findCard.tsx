'use server'


import {Find} from "@/utils/actions/find/find.validator";
import {CommentCard} from "@/app/components/CommentCard";
import {CommentForm} from "@/app/comments/CommentForm";
import React from "react";

type findCardProps = {
    // plant: Plant,
    find: Find
}


export default function FindCard() {
    return (
        <>
            <button className={"w-[50px] h-[50px] bg-blue-600"}></button>
        </>
    )
}