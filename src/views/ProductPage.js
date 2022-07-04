
import "../css/Product.css";
import back from "../images/icons/back_button.svg";
import modelViewerImg from "../images/icons/view_in_your_space.svg";

function ProductPage(){

return ( <>
    <div className="product-header">
    <div className="back-button"><img src={back}/></div>
    <div className="model-controls">
        <button className="ar-cta-button ar-cta-text">View in your space</button>
    <button className="ar-cta-button"><img src={modelViewerImg}/></button></div>    
    </div>
    {/* <ProductInfo/> */}
    <section className="product-info-section">
    <section className="product-purchase-section">
    <div className="model-viewer-div">
    <model-viewer src="https://modelviewer.dev/assets/ShopifyModels/Chair.glb" ar ar-scale="fixed" camera-controls alt="A 3D model of an astronaut" ios-src="https://modelviewer.dev/assets/ShopifyModels/Chair.glb" xr-environment></model-viewer>
    </div>
    <div className="product-purchase-div">
        <h3>Chester Feild </h3>
        <h3>&#8377; 23,500</h3>
        <button className="cta-button buy-button">Buy</button>
        <button className="add-to-cart-button">Add to cart</button>
    </div>
    </section>
    <div className="product-info-div">
        <h3>Chester field sofa -3 seater.</h3>
        <p>
Chester is a sofa that combines modern material science with fine, handmade craftsmanship.</p>
    </div>
    </section>
    </>
);

}

export default ProductPage;