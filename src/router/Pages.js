import LandingPage from "../views/LandingPage";
import ProductPage from "../views/ProductPage";
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
  } from "react-router-dom";
function Pages() {
    return (  
        <Router>
        <Routes >
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/' element={<LandingPage/>} />
      </Routes >
      </Router>
    );
}

export default Pages;