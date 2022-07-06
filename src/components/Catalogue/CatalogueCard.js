import "../../css/Catalogue.css";

import {Link} from "react-router-dom";

function CatalogueCard(props) {
    return ( <>
        <section className = "catalogue-card" >
        <img className = "catalogue-card-img"src = { props.image } />
        <h3 > { props.name } </h3> 
        <Link to = "/product" >
        <button className = "shop-now-btn" > Shop Now </button> 
        </Link> 
        </section> 
        </>
    );
}

export default CatalogueCard;