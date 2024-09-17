


import React from "react";
import {useDropzone} from "react-dropzone";
import {FormikProps} from "formik";
import {Alert, TextInput} from "flowbite-react";
import {z} from "zod";
import Image from "next/image"
import UploadImage from "../../../public/UploadImage.jpg";

type Props = {
    formikProps: {
        setFieldValue: FormikProps<unknown>[`setFieldValue`];
        fieldValue: string;
        handleChange: FormikProps<unknown>[`handleChange`];
        handleBlur: FormikProps<unknown>[`handleBlur`];
        setFieldError: FormikProps<unknown>[`setFieldError`];
        setFieldTouched: FormikProps<unknown>[`setFieldTouched`];
    };
    setSelectedImage: React.Dispatch<React.SetStateAction<any>>;


};


export function ImageUploadDropZonePlantnet(props: Props) {
    const {formikProps, setSelectedImage, selectedImage} = props

    const MAX_FILE_SIZE = 2000000;
    const ACCEPTED_IMAGE_TYPES = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/svg+xml',
    ];

    const FileSchema = z .instanceof(File) .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), 'Image is the wrong file type') .refine((file) => file.size <= MAX_FILE_SIZE, 'Image is too large');

    const onDrop = React.useCallback((acceptedFiles: any) => {
        const validationResult = FileSchema.safeParse(acceptedFiles[0])
        if(!validationResult.success) {
            formikProps.setFieldError(formikProps.fieldValue, validationResult.error.errors[0].message);

        } else {
            const formData = new FormData()
            formData.append('images', acceptedFiles[0]);
            formData.append('organs', 'auto');

            const fileReader = new FileReader();
            fileReader.readAsDataURL(acceptedFiles[0]);
            fileReader.addEventListener("load", () => {
                setSelectedImage(fileReader.result);
            })

            formikProps.setFieldValue(formikProps.fieldValue, formData).catch((error) => {
                console.error(error);
            });

        }
    }, [formikProps, setSelectedImage]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (

        <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-4 rounded">
            <TextInput
                aria-label="Click here to upload image or drag and drop"
                aria-describedby="image drag drop area"
                className="form-control-file"
                accept="image/*"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                {...getInputProps()}
            />

            {
                isDragActive ? (
                    <span>Drop image here</span> ) : (
                    <span>Drag and drop image or click on image to select an image.</span>
                )}
           {/*<Image className="w-full mx-auto" width={100} height={75} src={selectedImage ?? UploadImage} alt="uploadImage"/><br/>*/}
        </div>
    );
}

type DisplayUploadErrorProps = {
    errors: FormikProps<any>['errors'];
    field: string;
};

export function DisplayUploadErrorProps(props: DisplayUploadErrorProps) {
    const {errors, field} = props;
    if (errors[field]) {
        return (
            <Alert color="failure">
                {errors[field] as string}
            </Alert>
        );
    }
    return null;
}