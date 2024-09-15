import {CommentCard} from "@/app/components/CommentCard";
import {CommentForm, CommentFormContent} from "@/app/comments/CommentForm";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";
import {fetchAllComments, fetchCommentsByProfileId} from "@/utils/actions/comments/comment.model";
import {Comment} from "@/utils/actions/comments/comment.model";
import {Profile} from "@/utils/actions/profile/profile.validator";
import React from "react";

export default async function CommentsPage() {
    const loggedInUser = await getSession()

    if (!loggedInUser) {
        redirect('/')
    }

    const profile = await getProfileByProfileId(loggedInUser.profile.profileId)
    const comments = await fetchAllComments()


    return (
        <>
            <main>
            <div className={"grid sm:grid-cols-1 px-2.5 md:grid-cols-2 gap-5"}>
                <h1>PLEASE WORK </h1>
                <div className={"bg-white rounded-lg items-center"}>
                    <div className={"p-5 mx-auto"}>
                    </div>
                    <CommentForm session={loggedInUser} profile={profile} />
                    <div className={"py-5 mx-20"}>
                    </div>
                </div>
            </div>
                {comments.map((comment: Comment) => <CommentCard comment={comment} key={comment.commentId} />)}
            </main>
        </>
    )}

