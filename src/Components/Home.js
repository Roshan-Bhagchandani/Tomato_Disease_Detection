import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Form } from "./Form";
import { Cardbox } from "./Cardbox";
import { Aboutus } from "./Aboutus";

export const Home = () =>{
    return (
        <>
            <Navbar/>
            <Form/>
            <Cardbox/>
            <Aboutus/>
        </>
    )
}