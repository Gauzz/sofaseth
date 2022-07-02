import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Catalogue from "./components/Catalogue";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <React.StrictMode >
    <Header / >
    <HeroSection / >
    <Catalogue / >
    <FeatureSection / >
    <Footer/>
    </React.StrictMode>
);