
'use client'
import React, { useState } from "react";

export function FormerIdentifyUpload() {
    const [file, setFile] = useState(null);

    const handleChange = (event: any) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div className="PlantIdentifier">
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