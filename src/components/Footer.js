import "../css/Footer.css";

import fbIcon from "../images/icons/fb.svg";
import instaIcon from "../images/icons/instagram.svg";
import twitterIcon from "../images/icons/twitter.svg";

function Footer() {
    return (<section className="footer"> 
    <div className="Brand-name">Sofaseth</div>
    <div className="contact-details">
        <h5>Contact us</h5>
        <p>hello@sofaseth.com</p>
    </div>
    <div className="social-info">
        <span className="social-links">
        <img className="social-img" src={instaIcon}></img>
        <img className="social-img" src={fbIcon}></img>
        <img className="social-img" src={twitterIcon}></img>
        </span>
        <span className="copyright-span"> &copy; All Rights Reserved</span>
    </div>
    </section>);
}

export default Footer;