import {Comment} from "@/utils/actions/comments/comment.action";
import {getProfileByProfileId} from "@/utils/actions/profile/profile.action";
import React from "react";
import {format} from 'date-fns';

type Props = {
    comment: Comment
}

export async function CommentCard(props: Props) {
    const {comment} = props
    const profile = await getProfileByProfileId(comment.commentProfileId)
    const date =  comment.commentDateTime ? format(new Date(comment.commentDateTime), 'MMMM dd, yyyy') : 'Invalid Date'

    return (
        <article className="p-6 border border-gray-200 text-base">
            <div>

            </div>
            <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full" src={profile.profileImageUrl ?? '/profile.png'}
                    />{profile.profileUserName}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time dateTime={comment.commentDateTime ? new Date(comment.commentDateTime).toLocaleString() : ''} title={date}>
                        </time>
                    </p>
                </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">{comment.commentText}</p>
            <div className="flex items-center mt-4 space-x-4">
                <button type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                </button>
            </div>
        </article>

    )


}