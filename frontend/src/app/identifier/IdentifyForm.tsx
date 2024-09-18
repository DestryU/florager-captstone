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
import {Plant} from "@/utils/actions/plant/plant.validator";


type Props = {
    authorization: string | undefined,
    result: object[]
    apiKey: string | undefined

}


const FormSchema = z.object({
    identifyImage: z.any() .optional()
})


type FormValues = z.infer<typeof FormSchema>


export function IdentifyForm(props: Props) {
    const {authorization, result, apiKey} = props

    const router = useRouter()
    const [selectedImage, setSelectedImage] = useState<string | null>( null);

    if (authorization === undefined) {
        return <></>
    }

    function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
        console.log('help')
        const {setStatus, resetForm} = actions
        console.log('identify image', values.identifyImage)
                fetch(`/v2/identify/all?include-related-images=false&no-reject=false&nb-results=3&lang=en&api-key=${apiKey}`,
                {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                        'accept': 'application/json',
                    },
                    body: values.identifyImage

                })
                .then(response => response.json())
                .then(json => {
                    const plantScientificNames = json?.results.map((result: any) => result.species.scientificNameWithoutAuthor)

                    console.log(json?.results)
                    console.log(plantScientificNames)

                if (plantScientificNames.length) {

                    console.log('post image', values.identifyImage)
                    values.identifyImage.delete('organs')
                    fetch("/apis/image/",{
                        method: "POST",
                        headers: {
                            'Authorization': authorization ?? ""
                        },
                        body: values.identifyImage

                    })
                        .then(response => response.json())
                        .then(json => {
                            if(json.status !== 200) {
                                actions.setStatus({type: 'failure', message: json.message})
                            }
                            else {
                               router.push(`./identifier/results?plantName=${plantScientificNames[0]}&plantName=${plantScientificNames[1]}&plantName=${plantScientificNames[2]}&cloudinaryUrl=${json.message}`)
                            }
                        })
                }

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
            {(props: any)=> {
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

                console.log('status', status)
                return (
                    <>

                        <div className="space-y-2">
                            <form onSubmit={handleSubmit} className="flex min-h-auto gap-4 min-w-full flex-col grow">


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
                            {status &&
                                <IdentifiedPlants plants={status.data}/>
                            }
                        </div>

                    </>
                )
                }}
        </Formik>

        </>
    )
}

