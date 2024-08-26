
'use client'
import React, { useState } from "react";

export function UploadPhoto() {
    const [file, setFile] = useState(null);

    const handleChange = (event: any) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div className="Photo Upload">
            <input type="file" onChange={handleChange} />
            {file && (
                <div>
                    <img src={URL.createObjectURL(file)} alt="Uploaded Image" />
                    <button onClick={() => setFile(null)}>Remove Image</button>
                </div>
            )}
        </div>
    );
}

export default UploadPhoto;

