'use client'
import {Button, Label, TextInput} from "flowbite-react"
import React from "react"
import {Formik, FormikHelpers, FormikProps} from "formik"
import {z} from "zod"
import {toFormikValidationSchema} from "zod-formik-adapter"
import {DisplayError} from "@/app/components/DisplayError"
import {DisplayStatus} from "@/app/components/DisplayStatus"
import {FormDebugger} from "@/app/components/FormDebugger";


const SearchSchema= z.object({
    searchTerm : z.string().trim()
        .min(1, {message: 'Please provide a valid search term (min 1 character'})
        .max(128, {message: 'Please provide a valid search term (max 128 character'}),
})

type SearchTerm = z.infer<typeof SearchSchema>

export default function SearchPlants() {

    const initialValues = {
        searchTerm: ''
    }

    const handleSubmit = async (values: SearchTerm, actions: FormikHelpers<SearchTerm> ) => {
        console.log('handleSubmit')
        const {setStatus} = actions
        fetch(`/apis/plant/plantCommonNames/${values.searchTerm}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                let type = 'failure'
                if (data.status === 200) {
                    type = 'success'
                }
                setStatus({type, message: data.message})
               console.log(data)
            })
            .catch(error => {
                console.error(error)
                setStatus({type: 'failure', message: 'An error occurred try again later'})
            })
    }

    return(
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(SearchSchema)}>

                {SearchPlantsContent}

            </Formik>
        </>
    )
}


export function SearchPlantsContent(props: FormikProps<SearchTerm>) {

    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = props


    return (
        <>
            <form onSubmit={handleSubmit} className="flex min-h-auto gap-4 min-w-full flex-col grow">
                    <div className="mb-2 block items-center">
                        <Label htmlFor="searchTerm" value="searchTerm"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={"searchTerm"}
                        name={"searchTerm"}
                        type={"text"}
                        value={values.searchTerm}
                    />
                    <DisplayError errors={errors} touched={touched} field={"searchTerm"}/>

                    <div>
                    <Button className="mx-auto" color={'success'} type="submit">Search by Common Name</Button>
                    <DisplayStatus status={status}/>
                   </div>
            </form>
            <FormDebugger {...props}/>
        </>
    )
}

