import React from "react";
import video from "../Images/Animation - 1712172716816.gif";

export const Form = () => {
    return (
        <div className="box">
            <div className="hide">
                <p>CHOOSE AN IMAGE</p>
                <video
                    loop
                    src={video}
                    autoplay="true"
                ></video>
                <br />
                <form id="uploadForm" enctype="multipart/form-data">
                    <label for="imageUpload" className="custom-file-input"
                    >Select an image</label
                    >
                    <input
                        type="file"
                        id="imageUpload"
                        name="imageUpload"
                        accept="image/*"
                    />
                    <input
                        type="hidden"
                        id="imageSelected"
                        name="imageSelected"
                        value="0"
                    />
                    <br />
                </form>
            </div>
            <div id="responseContainer"></div>
        </div>
    )
}