import "../../css/Catalogue.css";
import hero from "../../images/sofaseth12crp1.svg";



function CatalogueCard(props) {
    return ( < >
        <section className = "catalogue-card" >
        <img className="catalogue-card-img" src = { props.image }></img>
        <h3>{ props.name }</h3>
        <button className="shop-now-btn">Shop Now</button>
        </section>
        </>
    );
}

export default CatalogueCard;