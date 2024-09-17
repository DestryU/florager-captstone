'use client'
import {Profile, PrivateProfileSchema} from "@/utils/actions/profile/profile.validator"
import {Button, Label, TextInput} from "flowbite-react";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {z} from "zod";
import {useRouter} from "next/navigation";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {DisplayUploadErrorProps, ImageUploadDropZone} from "@/app/navigation/ImageUploadDropZone";
import {green} from "next/dist/lib/picocolors";

type Props = {
    authorization: string|undefined,
    profile: Profile
}


const FormSchema = PrivateProfileSchema
    .pick({profileUserName: true, profilePronouns: true})
    .extend({
        profileImageUrl: z
            .any()
            .optional()
    })

type FormValues = z.infer<typeof FormSchema>


export function UpdateProfileForm(props: Props) {
    const {authorization, profile} = props

    const router = useRouter()
    //
    const [selectedImage, setSelectedImage] = React.useState<string | null>(props.profile.profileImageUrl || null);

    if (authorization === undefined ) {
        return <></>
    }

    function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
       // values.profileImageUrl = selectedImage
        const {setStatus, resetForm} = actions


        if(profile.profileUserName === values.profileUserName) {
            performUpdate()
        } else {
            fetch(`/apis/profile/profileUserName/${values.profileUserName}`).then(response => response.json())
                .then((json) => {
                    if(json.data === null) {
                        performUpdate()
                    }
                    else {
                        setStatus({type: 'failure', message: 'Profile username already exists'})
                    }
                })
        }


        function performUpdate() {
            if(values.profileImageUrl) {
                uploadImage(values.profileImageUrl)
            }
            else {
                profile.profileUserName = values.profileUserName
                profile.profilePronouns = values.profilePronouns
                submitUpdatedProfile(profile)
            }

        }
        function submitUpdatedProfile(profile: Profile) {
            fetch(`/apis/profile/${profile.profileId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization ?? "",
                },
                body: JSON.stringify(profile)
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
                    if(profile.profileUserName !== values.profileUserName) {
                        setTimeout(() => {
                            router.refresh()
                                router.push(`/profile/${values.profileUserName}`)
                            }
                        )
                    } else {
                        router.refresh()
                    }
                }
                setStatus({type, message: json.message})
            })
        }

        function uploadImage(profileImageUrl: any) {
            console.log('This is the upload function')
            fetch("/apis/image/",{
                method: "POST",
                headers: {
                   'Authorization': authorization ?? ""
                },
                body: profileImageUrl

            })
                .then(response => response.json())
                .then(json => {
                    if(json.status !== 200) {
                        setStatus({type: 'failure', message: json.message})
                    }
                    else {
                        console.log('Image URL saved:', json.message);
                        profile.profileImageUrl = json.message
                        profile.profileUserName = values.profileUserName
                        profile.profilePronouns = values.profilePronouns
                        console.log(profile)
                        submitUpdatedProfile(profile)
                    }
                })
        }
    }

    return (
        <Formik
            initialValues={
                {
                    profilePronouns: props.profile.profilePronouns, profileUserName: props.profile.profileUserName}}

            onSubmit={handleSubmit}
            validationSchema={toFormikValidationSchema(FormSchema)}
            setSelectedImage={setSelectedImage}
        >
            {EditProfileFormContent}
        </Formik>
    )
}


export function EditProfileFormContent(props: FormikProps<FormValues>) {
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
                    <h1 className="text-3xl font-bold text-green-700 mb-10">Update Profile</h1>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="profileUserName" value="Username"/>
                        </div>
                        <TextInput
                            autoComplete='username'
                            name={'profileUserName'}
                            id="profileUserName"
                            type="text"
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.profileUserName}
                        />
                        <DisplayError errors={errors} touched={touched} field={'profileUserName'}/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="profilePronouns" value={"Pronouns"}/>
                        </div>
                        <TextInput
                            id="profilePronouns"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.profilePronouns ?? ""}
                            name={'profilePronouns'}
                        />
                        <DisplayError errors={errors} touched={touched} field={'profilePronouns'}/>

            </div>

                    <ImageUploadDropZone
                        formikProps={{
                            setFieldError,
                            setFieldTouched,
                            handleBlur,
                            handleChange,
                            setFieldValue,
                            fieldValue: 'profileImageUrl'
                        }}
                        setSelectedImage={setSelectedImage}
                    />

                    {selectedImage && <img src={selectedImage} alt="profile image" className="mt-4"/>}
                    <DisplayUploadErrorProps errors={errors} field={'profileImageUrl'}/>
                    <div className={"flex mt-10"}>
                        <Button className={"mr-1"} color={"green"} type="submit"> Submit</Button>
                        <Button className={'ml-1'} color={"green"} type="reset"> Reset</Button>
                    </div>
                </form>
                <DisplayStatus status={status}/>
                <FormDebugger {...props} />
            </div>

        </>
    )
}