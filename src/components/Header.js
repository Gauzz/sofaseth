import logo from "../images/logo/logo.svg";
import "../css/Header.css";
import hamburger from "../images/icons/hamburger.svg";
// import close from "../images/icons/close.svg";

function Header() {
  return (
    <nav>
      <div class="Brand">
        <img src={logo} className="App-logo" aslt="logo" />
        <div class="Brand-name"> Sofaseth </div>
      </div>
      <img className="Hamburger-icon" src={hamburger} ></img>
     <ul>
        <li> Sofas </li> <li> Orders </li> <li> Cart(0) </li> <li> Account </li>
      </ul>
    </nav>
  );
}

export default Header;
