'use client'

import {Session} from "@/utils/session.utils";
import {useRouter} from "next/navigation";
import {CommentSchema} from "@/utils/actions/comments/comment.validator";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {FormDebugger} from "@/app/components/FormDebugger";
import {CommentCard} from "@/app/components/CommentCard";
import {fetchAllComments} from "@/utils/actions/comments/comment.action";
import {Profile} from "@/utils/actions/profile/profile.validator";

type Props = {
    session: Session
    profile: Profile
}
const FormSchema = CommentSchema.pick({commentText: true})

type Values = z.infer<typeof FormSchema>

export function CommentForm(props: Props) {

    const session = props.session


    const router = useRouter()

    const initialValues = {
        commentText: '',
    }



    const handleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
        const comment = {
            commentProfileId: session.profile.profileId,
            commentId: null,
            commentFindId: null,
            commentText: values.commentText,
            commentDateTime: null
        }
        const {setStatus, resetForm} = actions
        fetch(`/apis/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${session.authorization}`
            },
            body: JSON.stringify(comment)
        }).then(response => response.json()).then(json => {
            let type = 'failure'
            if (json.status === 200) {
                type = 'success'
                resetForm()
                router.refresh()
            }
            setStatus({type: type, message: json.message})
        })
    }


    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}
                    validationSchema={toFormikValidationSchema(FormSchema)}>
                {CommentFormContent}
            </Formik>
        </>
    )
}


export function CommentFormContent(props: FormikProps<Values>) {
    const {handleSubmit, handleChange, handleBlur, status, resetForm, errors, touched, values} = props

            return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="border-4 border-green-700">
                    <div className="px-10 py-5">
                        <label htmlFor="comment" className="sr-only">Your Comment</label>
                        <textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.commentText}
                            name={"commentText"}
                            id="comment"
                            rows={4}
                            className="w-full text-sm text-black bg-white focus:ring-0">
				</textarea>
                        <DisplayError errors={errors} touched={touched} field={"commentText"}/>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t">
                        <button type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-green-800">
                            Post Comment
                        </button>
                        {/*<div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">

                        </div>*/}
                    </div>
                </div>
            </form>
            <DisplayStatus status={status}/>
            <FormDebugger {...props} />
        </>
    )

}