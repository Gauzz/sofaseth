import "../css/Catalogue.css";
import catalogueJson from "../data/catalogue.json";
import CatalogueCard from "./Catalogue/CatalogueCard";

function Products() {
    let products = catalogueJson.map((product) => ( <
        CatalogueCard name = { product.name }
        image = { product.image }
        id = { product.id } >
        < /CatalogueCard>
    ));
    return products;
}

function Catalogue() {
    return ( <
        >
        <
        section className = "catalogue-intro" >
        <
        h1 > DESIGNS THAT INSPIRE < /h1> <
        p > Take a look at featured sofas designed by our team < /p> <
        /section> <
        section className = "catalogue-container" >
        <
        Products / >
        <
        /section> <
        />
    );
}

export default Catalogue;