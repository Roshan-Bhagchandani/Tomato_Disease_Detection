import { React, useState, useRef } from "react";
import video from "../Images/Animation-1712172716816.webm";
import axios from "axios";
import { useTranslation } from "react-i18next";
export const Form = () => {
     const { t } = useTranslation();
    const [prediction, setPrediction] = useState('');
    const [Confidence, setConfidence] = useState('');
    const [videoVisible, setVideoVisible] = useState(true);
    const [imageUrl, setImageUrl] = useState('');
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const fileUploadHandler = async (event) => {
        const selectedFile = event.target.files[0];
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);
            const URL = "https://4d85-34-125-68-15.ngrok-free.app/predict";
            // Replace 'YOUR_BACKEND_URL/predict' with the actual backend URL
            const response = await axios.post(URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Response:', response.data);

            // Set prediction result
            setPrediction(response.data.pred_class);
            setConfidence(response.data.pred_conf);
            // Hide the video
            setVideoVisible(false);

            // Display uploaded image
            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="box box1">
            <div className="hide">
                {videoVisible && (
                    <video loop autoPlay style={{ width: '200px', height: 'auto', marginTop: '20px' }}>
                        <source src={video} type="video/mp4" />
                    </video>
                )}
                {videoVisible && (<p>{t('CHOOSE AN IMAGE')}</p>)}
                {imageUrl && (
                    <img src={imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto', marginTop: '20px' }} />
                )}
                <input ref={fileInputRef} type="file" onChange={fileUploadHandler} accept="image/*" style={{ display: 'none' }} />
                <button onClick={handleUploadClick}>{t('Upload')}</button>
                {prediction && (
                    <div>
                        <p>Prediction: {prediction}<br/> Confidence : {Confidence} </p>
                    </div>
                )}
            </div>
            <div id="responseContainer"></div>
        </div>
    )
}