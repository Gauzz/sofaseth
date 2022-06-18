import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    React.StrictMode >
    <
    Header / >
    <
    HeroSection / >
    <
    /React.StrictMode>
);