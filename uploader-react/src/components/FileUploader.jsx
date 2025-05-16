import React, { useState } from "react";
import { uploadToAzureBlob } from '../utils/azureUploader';


const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file to upload.");
            return;
        }
        try {
            await uploadToAzureBlob(file);
            setMessage("File uploaded successfully!");
        } catch (error) {
            setMessage("Failed to upload file. Please try again.");
            console.error(error);
        }
    }


    return (
        <div className="p-4">
            <input type="file" onChange={handleFileChange} />
            <button className="bg-blue-500 text-white p-2" onClick={handleUpload}>Upload</button>
            {message && <div>{message}</div>}
        </div>
    ); 
};
export default FileUploader;