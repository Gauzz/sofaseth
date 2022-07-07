
import "../css/Product.css";
import back from "../images/icons/back_button.svg";
import close from "../images/icons/close.svg";
import modelViewerImg from "../images/icons/view_in_your_space.svg";
import {Link} from "react-router-dom";
import catalogueJson from "../data/catalogue.json";
import {useParams} from "react-router-dom";
import React, { useState } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

function ProductPage(){
    let { id } = useParams();
    let product = catalogueJson.find((product)=>{return product.id == id});
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
return ( <>
    <div className="product-header">
        
    <div className="back-button"><Link to="/"><img src={back}/></Link></div>
    <div className="model-controls">
        <button className="ar-cta-button ar-cta-text" onClick={toggleModal}>View in your space</button>
    <button className="ar-cta-button" onClick={toggleModal}><img src={modelViewerImg}/></button></div>    
    </div>
    {/* <ProductInfo/> */}
    <section className="product-info-section">
    <section className="product-purchase-section">
    <div className="model-viewer-div">
    <model-viewer src={`/models/${product.id}/${product.id}.glb`} ar ar-scale="fixed" camera-controls alt={`{A 3D model of ${product.name}}`} ios-src={`/models/${product.id}/${product.id}.glb`}xr-environment></model-viewer>
    </div>
    <div className="product-purchase-div">
        <h3>{product.name}</h3>
        <h3>&#8377; 23,500</h3>
        <button className="cta-button buy-button">Buy</button>
        <button className="add-to-cart-button">Add to cart</button>
    </div>
    </section>
    <div className="product-info-div">
        <h3>{product.name}</h3>
        <p>
        {product.name} is a sofa that combines modern material science with fine, handmade craftsmanship.</p>
    </div>
    </section>
    <section className="product-purchase-footer">
        <div className="price-div-footer">
        <p>Price</p>
        <h3>&#8377; 23,500</h3>
        </div>
    <div className="product-purchase-ctas">
        <button className="cta-button buy-button">Buy</button>
        <button className="add-to-cart-button">Add to cart</button>
        </div>
    </section>
    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="View in yor space."
      >
        <div className="qr-code-modal">
            <img src={close} className="close-modal-button" onClick={toggleModal}></img>
            <p>Your device doesn’t support this feature</p>
        <img className="qr-code-image" src={product.qrcode}></img>
        <p style={{ color:"#767676" }}>Scan this QR code with AR supported devices</p>
      </div>
      </Modal>

    </>
);

}

export default ProductPage;