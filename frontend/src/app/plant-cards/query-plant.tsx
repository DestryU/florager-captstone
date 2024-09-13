'use client'

import {Session} from "@/utils/fetchSession";
import {useRouter} from "next/navigation";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {toFormikValidationSchema} from "zod-formik-adapter";
import React from "react";
import {DisplayUploadErrorProps, ImageUploadDropZone} from "@/app/components/ImageUploadDropZone";
import {PlantSchema} from "@/utils/actions/plant/plant.validator";
import {Plant} from "@/utils/actions/plant/plant.action";

type Props = {
    // session: Session
    plant: Plant
}
const FormSchema = PlantSchema.omit({plantImageUrl: true, plantId: true}).extend({plantImageUrl:z.any().optional()})


type FormValues = z.infer<typeof FormSchema>

export function PlantQuery(props: Props ) {
    // const session = props.session
    const plant = props.plant
    const router = useRouter()

    const initialValues: FormValues = {
            plantReferenceUrl:'',
            plantImageUrl: '',
            plantScientificName: '',
            plantCommonNames: ['']
        }




    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        console.log('handle submit is firing')
        // const profileId = session.profile.profileId
        const plant = {
            plantId: "",
            plantReferenceUrl: values.plantReferenceUrl,
            plantImageUrl: values.plantImageUrl,
            plantScientificName: values.plantScientificName,
            plantCommonNames: values.plantCommonNames

        }

        if(values.plantImageUrl) {
            uploadImage(values.plantImageUrl)
        }
        else {
            fetchPlantCard(plant)
        }

        const {setStatus, resetForm} = actions

        function fetchPlantCard (plant: Plant) {

            fetch(`/apis/plant`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "authorization": `${session.authorization}`
                },
                body: JSON.stringify(plant)
            }).then(response => response.json()).then(json => {
                let type = 'failure'
                if (json.status === 200) {
                    type ='success'
                    resetForm()
                    setTimeout(() => {
                        console.log("Delayed for 1 second.");
                    }, 1000);
                    router.push('/')
                }
                setStatus({type: type, message: json.message})
            })
        }

        function uploadImage(plantImage: any) {
            fetch("/apis/image",{
                method: "POST",
                headers: {
                    // 'Authorization': session.authorization ?? ""
                },
                body: plantImage
            })
                .then(response => response.json())
                .then(json => {
                    if(json.status !== 200) {
                        setStatus({type: 'failure', message: json.message})
                    }
                    else {
                        plant.plantImageUrl = json.message
                        fetchPlantCard(plant)
                    }
                })
        }
    }

    return(
        <>

            <Formik initialValues={initialValues}  onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(FormSchema)}>
                {QueryPlantFormContent}
            </Formik>
        </>
    )
}

export function QueryPlantFormContent(props: FormikProps<FormValues>) {
    const {handleSubmit, handleChange, handleBlur, status, resetForm, errors, touched, setFieldTouched, setFieldValue, setFieldError, values} = props
    const [selectedImage, setSelectedImage] = React.useState<string|null>(null)

    return(
        <>
            <form onSubmit={handleSubmit} className="flex justify-center">
                <div
                    className="max-w-screen-lg rounded mx-auto">
                    <div className="pr-4 pl-6 py-4">
                        <ImageUploadDropZone
                            formikProps={{
                                setFieldError,
                                setFieldTouched,
                                handleBlur,
                                handleChange,
                                setFieldValue,
                                fieldValue: 'plantImageUrl'
                            }}
                            setSelectedImage={setSelectedImage}
                            selectedImage={selectedImage}
                        />
                        <DisplayUploadErrorProps errors={errors} field={'plantImageUrl'}/>
                        <div className="flex items-center justify-between pt-3 border-t dark:border-gray-600">
                            <button type="submit"
                                    className="items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-auto">
                                Upload Image
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <DisplayStatus status={status}/>
        </>
    )

}