import {CommentCard} from "@/app/components/CommentCard";
import {CommentForm, CommentFormContent} from "@/app/comments/[findId]/CommentForm";
import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";
import {fetchAllComments, fetchCommentsByProfileId} from "@/utils/actions/comments/comment.action";
import {Comment} from "@/utils/actions/comments/comment.action";
import React from "react";
import {PageProps} from "@/utils/interfaces/NextComponents";
<<<<<<< HEAD
import DistinctFindCard from "@/app/components/FindCard";
=======
import DistinctFindCard from "@/app/components/find-card";
>>>>>>> 5b48450b2080b64986a0f869aec5fcddbd7bd455
type Params = {
    findId: string
}
export default async function CommentsPage(props: PageProps<Params>) {
    const loggedInUser = await getSession()

    const findId = props.params.findId
    console.log(findId)

    if (!loggedInUser) {
        redirect('/')
    }

    const profile = await getProfileByProfileId(loggedInUser.profile.profileId)
    const comments = await fetchAllComments()

    return (
        <>
            <section className={"flex flex-wrap justify-center items-center w-full"}>
                <DistinctFindCard findId={findId}/>

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

