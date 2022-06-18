import logo from "../images/logo/logo.svg";
import "../css/Header.css";
import hamburger from "../images/icons/hamburger.svg";
import close from "../images/icons/close.svg";

function toggleNav(e){
let currentNavState = document.getElementsByClassName('Navigation-button')[0].getAttribute('src');
if(currentNavState == hamburger){ 
  document.getElementsByClassName('Navigation-button')[0].setAttribute('src',close);
 document.getElementById('menu-list').style.display='block';
}
else {
  document.getElementsByClassName('Navigation-button')[0].setAttribute('src',hamburger);
  document.getElementById('menu-list').style.display='none';
}

}


function Header() {
  return (
    <nav>
      <div class="Brand">
        <img src={logo} className="App-logo" aslt="logo" />
        <div class="Brand-name"> Sofaseth </div>{" "}
      </div>
      <img className="Navigation-button" onClick={toggleNav} src={hamburger}>
      </img>
      <ul id="menu-list">
        <li> Sofas </li> <li> Orders </li> <li> Cart(0) </li> <li> Account </li>
      </ul>
    </nav>
  );
}

export default Header;
