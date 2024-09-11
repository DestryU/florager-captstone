'use client'
import {Button, Label, TextInput} from "flowbite-react";
import React from "react";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {z} from "zod";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";

const SignUpSchema = z.object( {
    profileUserName: z.string({required_error: 'profile user name is required'})
        .trim()
        .min(1, {message: 'please provide a valid username (min 1 character'})
        .max(128, {message: 'please provide a valid username (max 128 character'}),

    profileEmail: z.string({
            required_error: 'profileEmail is required',
            invalid_type_error: ' please provide a valid profileEmail'
        })
            .email({ message: 'please provide a valid email' })
            .max(128, { message: 'profileEmail is to long' }),
        profilePasswordConfirm: z.string({required_error: 'password confirm is required'})
            .min(8, { message: 'please provide a valid password (min 8 characters)' })
            .max(32, { message: 'please provide a valid password (max 32 characters)' }),
        profilePassword: z.string({required_error: 'password is required'})
            .min(8, { message: 'please provide a valid password (min 8 characters)' })
            .max(32, { message: 'please provide a valid password (max 32 characters)' })
    })
    .refine(data => data.profilePassword === data.profilePasswordConfirm, {
        message: 'passwords do not match'
    })

type SignUp = z.infer< typeof SignUpSchema>
export default function SignUpForm() {

    const initialValues = {
        profileUserName: '',
        profileEmail: '',
        profilePassword: '',
        profilePasswordConfirm: ''
    }
    /*
    *
     */


    const handleSubmit = (values: SignUp, actions: FormikHelpers<SignUp> ) => {
        const {setStatus, resetForm} = actions
        fetch('/apis/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(data => {
                const type = 'failure'
                setStatus({type, message: data.message})
                if (data.staus === 200) {
                    resetForm()
                }

            })
            .catch(error => {
                console.error(error)
                setStatus({type: 'failure', message: 'An error occurred try again later'})
            })
    }

    return(
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(SignUpSchema)}>

                {SignUpFormContent}

            </Formik>
        </>
    )
}


export function SignUpFormContent(props: FormikProps<SignUp>) {

    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;


    return (
        <>
            <form onSubmit={handleSubmit} className="flex min-h-auto gap-4 min-w-full flex-col grow">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="email"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='email'
                        id="email1"
                        name={'profileEmail'}
                        type="email"
                        value={values.profileEmail}
                    />
                    <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="profileUserName" value="name"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='username'
                        id="profileUserName"
                        name={'profileUserName'}
                        type="text"
                        value={values.profileUserName}
                    />
                    <DisplayError errors={errors} touched={touched} field={'profileUserName'}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="profilePassword" value="password"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete={'new-password'}
                        name='profilePassword'
                        id="profilePassword"
                        type="password"
                        value={values.profilePassword}
                    />
                    <DisplayError errors={errors} touched={touched} field={'profilePassword'}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="profilePasswordConfirm" value="password confirm"/>
                    </div>
                    <TextInput
                        value={values.profilePasswordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="profilePasswordConfirm"
                        name="profilePasswordConfirm"
                        autoComplete={'new-password confirm'} type="password"
                    />
                    <DisplayError errors={errors} touched={touched} field={'profilePasswordConfirm'}/>
                </div>
                <Button color={'success'} type="submit">Submit</Button>
                <Button  color={'failure'} type="reset" onClick={handleReset}>Reset</Button>
                <DisplayStatus status={status}/>
            </form>
            <FormDebugger {...props} />
        </>

    )
}