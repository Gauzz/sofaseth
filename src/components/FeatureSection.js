import "../css/FeatureSection.css";
import hero from "../images/sofaseth12crp1.svg";

function FeatureSection() {
    return ( <section className="feature-section">
        <h1>Web AR Technology for Sofa</h1>
        <div className="feature-container">
            <p className="feature-description">You’ve been dreaming of turning your home into the coziest and most comfortable place on Earth.  You finally buy a sofa and bring it home. When you put this sofa in your room, you may become so sad realizing that your buy doesn’t suit the interior. To avoid such negative experiences and make your shopping more interactive, we have created a  augmented reality tool, <strong>view in your space.</strong></p>
            <img className="feature-image" src={hero}></img>
        </div>
        <button className = "cta-button feature-cta" > Get Now < /button>
    </section>
    );
}

export default FeatureSection;