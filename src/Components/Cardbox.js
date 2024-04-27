import React from "react";
import { Card } from "./Card";

export const Cardbox = () => {
    const data = [
        {
            disease : "disease1",
            about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nam architecto deleniti, enim dolore ut omnis! Dignissimos dolor quis debitis soluta magnam cupiditate iure tempore omnis repellendus aliquam harum fugit, eaque animi. Cum nobis possimus explicabo perferendis aspernatur a consequatur tempora ad dignissimos, enim saepe nihil minima alias sequi perspiciatis."
        },
        {
            disease : "disease2",
            about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nam architecto deleniti, enim dolore ut omnis! Dignissimos dolor quis debitis soluta magnam cupiditate iure tempore omnis repellendus aliquam harum fugit, eaque animi. Cum nobis possimus explicabo perferendis aspernatur a consequatur tempora ad dignissimos, enim saepe nihil minima alias sequi perspiciatis."
        }
    ]
    return (
        <div>
            {data.map((item, index) => (
                <Card key={index} disease={item.disease} about={item.about} />
                ))}
        </div>
    )
}