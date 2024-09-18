import {CommentCard} from "@/app/components/CommentCard";
import {CommentForm, CommentFormContent} from "@/app/comments/CommentForm";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";
import {fetchAllComments, fetchCommentsByProfileId} from "@/utils/actions/comments/comment.action";
import {Comment} from "@/utils/actions/comments/comment.action";
import React from "react";
import DistinctFindCard from "@/app/components/FindCard";

export default async function CommentsPage() {
    const loggedInUser = await getSession()

    if (!loggedInUser) {
        redirect('/')
    }

    const profile = await getProfileByProfileId(loggedInUser.profile.profileId)
    const comments = await fetchAllComments()


    return (
        <>
            <section className={"flex flex-wrap justify-center items-center w-full"}>
                <DistinctFindCard findId={"b470c3b1-8237-4e0e-bb19-3111971921f2"}/>

                <div className={"bg-red rounded-lg items-center h-auto w-[500px] m-12"}>
                    <h1 className={"text-xl text-green-700 font-bold"}>Leave a comment about this Foliage Find!</h1>
                    <CommentForm session={loggedInUser} profile={profile}/>
                </div>
            </section>

            <section className={"h-full mx-auto px-16"}>
                {comments.map((comment: Comment) => <CommentCard comment={comment} key={comment.commentId}/>)}
            </section>
        </>
    )
}

