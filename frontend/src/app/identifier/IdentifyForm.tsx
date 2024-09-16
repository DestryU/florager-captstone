'use client'
import {Button} from "flowbite-react";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {z} from "zod";
import {useRouter} from "next/navigation";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";
import React, {useCallback} from 'react'
import {DisplayUploadErrorProps, ImageUploadDropZone} from "@/app/navigation/ImageUploadDropZone";
import {Find, FindSchema} from "@/utils/actions/find/find.validator";

type Props = {
    authorization: string | undefined,
    find: Find
}


const FormSchema = FindSchema
    .pick({
        findImageUrl: z
            .any()
            .optional()
    })

type FormValues = z.infer<typeof FormSchema>


export function FindForm(props: Props) {
    const {authorization, find} = props

    const router = useRouter()
    //
    const [selectedImage, setSelectedImage] = React.useState<string | null>(props.find.findProfileId || null);

    if (authorization === undefined) {
        return <></>
    }

    function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
        // values.findImageUrl = selectedImage
        const {setStatus, resetForm} = actions

        function submitFind(find: Find) {
            fetch(`/apis/profile/${find.findId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization ?? "",
                },
                body: JSON.stringify(find)
            }).then(
                (response: Response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Network response was not ok.')
                }).then((json) => {
                let type = 'failure'
                if (json.status === 200) {
                    resetForm()
                    type = 'success'
                    if(find.findProfileId !== values.findProfileId) {
                        setTimeout(() => {
                                router.refresh()
                                router.push(`/find/${values.findProfileId}`)
                            }
                        )
                    } else {
                        router.refresh()
                    }
                }
                setStatus({type, message: json.message})
            })
        }

        function uploadImage(findImageUrl: any) {
            console.log('This is the upload function')
            fetch("/apis/image/", {
                method: "POST",
                headers: {
                    'Authorization': authorization ?? ""
                },
                body: findImageUrl

            })
                .then(response => response.json())
                .then(json => {
                    if (json.status !== 200) {
                        setStatus({type: 'failure', message: json.message})
                    } else {
                        console.log('Image URL saved:', json.message);
                        find.findImageUrl = json.message
                        console.log(find)
                        submitFind(find)
                    }
                })
        }
    }

    return (
        <Formik
            initialValues={
                {findId: props.find.findId,
                    findProfileId: props.find.findProfileId,
                    findPlantId: props.find.findPlantId,
                    findImageUrl: props.find.findImageUrl,
                    findLat: props.find.findLat,
                    findLng: props.find.findLng,
                    findDateTime: props.find.findDateTime}}

            onSubmit={handleSubmit}
            validationSchema={toFormikValidationSchema(FormSchema)}
            setSelectedImage={setSelectedImage}
        >
            {FindFormContent}
        </Formik>
    )
}


export function FindFormContent(props: FormikProps<FormValues>) {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldError,
        setFieldTouched
    } = props;

    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)


    return (
        <>

            <div className="space-y-2">
                <form onSubmit={handleSubmit} className="flex min-h-auto gap-4 min-w-full flex-col grow">
                    <h1 className="text-3xl font-bold text-green-700 mb-10">Plant Identifier</h1>

                    <ImageUploadDropZone
                        formikProps={{
                            setFieldError,
                            setFieldTouched,
                            handleBlur,
                            handleChange,
                            setFieldValue,
                            fieldValue: 'findImageUrl'
                        }}
                        setSelectedImage={setSelectedImage}
                    />

                    {selectedImage && <img src={selectedImage} alt="identify image" className="mt-4"/>}
                    <DisplayUploadErrorProps errors={errors} field={'findImageUrl'}/>
                    <div className={"flex mt-10"}>
                        <Button className={"mr-1"} color={"green"} type="submit"> Identify My Plant</Button>
                        <Button className={'ml-1'} color={"green"} type="reset"> Reset</Button>
                    </div>
                </form>
                <DisplayStatus status={status}/>
                <FormDebugger {...props} />
            </div>

        </>
    )
}

