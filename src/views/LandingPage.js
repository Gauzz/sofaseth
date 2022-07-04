
import "../css/index.css";
import HeroSection from "../components/HeroSection";
import Catalogue from "../components/Catalogue";
import FeatureSection from "../components/FeatureSection";

import Header from "../components/Header";

import Footer from "../components/Footer";
function LandingPage(){

return ( <>
   <Header />
    <HeroSection / >
    <Catalogue / >
    <FeatureSection / >
    <Footer/>
    </>
);

}

export default LandingPage;