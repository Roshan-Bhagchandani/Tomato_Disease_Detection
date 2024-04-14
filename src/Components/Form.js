import { React, useState } from "react";
import video from "../Images/Animation-1712172716816.webm";
import axios from "axios";

export const Form = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [prediction, setPrediction] = useState('');

    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const fileUploadHandler = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);
            console.log(formData);
            const URL = "https://74d3-34-82-123-154.ngrok-free.app/predict"

            // Replace 'YOUR_BACKEND_URL' with the actual backend URL
            const response = await axios.post(URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Response:', response.data);

            // Set prediction result
            setPrediction(response.data.pred_class);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="box">
            <div className="hide">
                <p>CHOOSE AN IMAGE</p>
                {imageUrl && <video loop src={video} autoPlay={true} style={{ display: 'none' }}></video>}
                <br />
                <div>
                    {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto', marginTop: '20px' }} />}
                    <input type="file" onChange={fileSelectedHandler} />
                    <button onClick={fileUploadHandler}>Upload</button>
                    {prediction && (
                        <div>
                            <p>Prediction: {prediction}</p>
                        </div>
                    )}
                </div>
            </div>
            <div id="responseContainer"></div>
        </div>
    )
}