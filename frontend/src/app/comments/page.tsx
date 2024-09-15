import {CommentCard} from "@/app/components/CommentCard";
import {CommentForm, CommentFormContent} from "@/app/comments/CommentForm";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";
import {fetchAllComments, fetchCommentsByProfileId} from "@/utils/actions/comments/comment.action";
import {Comment} from "@/utils/actions/comments/comment.action";
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
            <div className={"grid sm:grid-cols-1 px-20 gap-5"}>
                <div className={"p-10 mx-auto"}>
                <h1 className={"text-xl text-green-700 font-bold"}>View Your Comments Here</h1>
                </div>
                <div className={"bg-white rounded-lg items-center"}>
                    <CommentForm session={loggedInUser} profile={profile} />
                </div>
            </div>
                {comments.map((comment: Comment) => <CommentCard comment={comment} key={comment.commentId} />)}
            </main>
        </>
    )}

