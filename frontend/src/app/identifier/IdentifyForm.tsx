'use client'
import {Button} from "flowbite-react";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {z} from "zod";
import {useRouter} from "next/navigation";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";
import React, {useCallback, useState} from 'react'
import {DisplayUploadErrorProps, ImageUploadDropZonePlantnet} from "@/app/components/ImageUploadDropzonePlantnet";
import {IdentifiedPlants} from "@/app/identifier/IdentifiedPlants";


type Props = {
    authorization: string | undefined,
    result: object[]
    apiKey: string

}


const FormSchema = z.object({
    identifyImage: z.any() .optional()
})


type FormValues = z.infer<typeof FormSchema>


export function IdentifyForm(props: Props) {
    const {authorization, result, apiKey} = props

    const router = useRouter()
    const [selectedImage, setSelectedImage] = useState<string | null>( null);
    const [identifyResults, setIdentifyResults] = useState<[] | null>(null)

    if (authorization === undefined) {
        return <></>
    }

    function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
        console.log('help')
        const {setStatus, resetForm} = actions

                fetch(`/v2/identify/all?include-related-images=false&no-reject=false&nb-results=3&lang=en&api-key=${apiKey}`,
                {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                       // 'Content-Type': 'multipart/form-data',
                        'accept': 'application/json',
                    },
                    body: values.identifyImage

                })
                .then(response => response.json())
                .then(json => {
                    // setIdentifyResults(json?.results.map((result: any) => result.species.scientificNameWithoutAuthor))
                    console.log(json?.results)
                    console.log(json.results.map((result: any) => result.species.scientificNameWithoutAuthor))
                })


    }

    return (
        <>
        <Formik
            initialValues={
                {
                    identifyImage: '',
                  }}

            onSubmit={handleSubmit}
            validationSchema={toFormikValidationSchema(FormSchema)}
            setSelectedImage={setSelectedImage}
        >
            {IdentifyFormContent}
        </Formik>
            {identifyResults &&
            <IdentifiedPlants plantScientificNames={identifyResults} />
            }
        </>
    )
}


export function IdentifyFormContent(props: FormikProps<FormValues>) {
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

                    <ImageUploadDropZonePlantnet
                        formikProps={{

                            setFieldError,
                            setFieldTouched,
                            handleBlur,
                            handleChange,
                            setFieldValue,
                            fieldValue: 'identifyImage'
                        }}
                        setSelectedImage={setSelectedImage}
                    />

                    {selectedImage && <img src={selectedImage} alt="identify image" className="mt-4"/>}
                    <DisplayUploadErrorProps errors={errors} field={'identifyImage'}/>
                    <div className={"flex mt-10"}>
                        <Button className={"mr-1"} color={"green"} type="submit"> Identify My Plant</Button>
                        <Button className={'ml-1'} color={"green"} type="reset"> Reset</Button>
                    </div>
                </form>
                <DisplayStatus status={status}/>
           {/*     <FormDebugger {...props} />*/}
            </div>

        </>
    )
}

