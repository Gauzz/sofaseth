import "../../css/Catalogue.css";

import {Link} from "react-router-dom";

function CatalogueCard(props) {
    return ( <>
     <Link to = {`/product/${props.id}`} >
        <section className = "catalogue-card" >
        <img className = "catalogue-card-img"src = { props.image } />
        <h3 > { props.name } </h3> 
        <button className = "shop-now-btn" > Shop Now </button> 
        </section>
        </Link>  
        </>
    );
}

export default CatalogueCard;