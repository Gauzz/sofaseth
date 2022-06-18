import "../css/HeroSection.css";
import hero from "../images/sofaseth1 2crp1.svg";

function HeroSection() {
    return ( <
        section className = "hero-section" >
        <
        div className = "cta-div" >
        <
        h1 > Best sofas to make you feel special < /h1>{" "} <
        p className = "hero-subheading" > { " " }
        Great design, great style, great comfort. { " " } <
        /p>{" "} <
        button className = "cta-button" > Get Now < /button>{" "} <
        /div>{" "} <
        div className = "hero-image-div" > { " " } <
        img src = { hero }
        />{" "} <
        /div>{" "} <
        button className = "cta-button-mobile" > Get Now < /button>{" "} <
        /section>
    );
}

export default HeroSection;