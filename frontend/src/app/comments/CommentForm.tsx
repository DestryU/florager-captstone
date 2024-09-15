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
import {fetchAllComments} from "@/utils/actions/comments/comment.model";
import {Profile} from "@/utils/actions/profile/profile.validator";

type Props = {
    session: Session
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
            commentDatetime: ''
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
                <div className="w-full border border-gray-200">
                    <div className="px-4 py-2 bg-white dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your Post</label>
                        <textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.commentText}
                            name={"commentContent"}
                            id="comment"
                            rows={4}
                            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
				</textarea>
                        <DisplayError errors={errors} touched={touched} field={"commentText"}/>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post comment
                        </button>
                        <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">

                        </div>
                    </div>
                </div>
            </form>
            <DisplayStatus status={status}/>
            <FormDebugger {...props} />
        </>
    )

}