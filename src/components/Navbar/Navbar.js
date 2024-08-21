import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/png/lucida logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];
const navOnClickHandler = ()=>{
  window.scroll({top:0,left:0, behavior:'smooth'})
}

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container className="container-lg" fluid>
        <Navbar.Brand>
          <img src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav__collapse my-3 my-lg-0"  >
          <Nav id="navigation" className="nav__links">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} onClick={navOnClickHandler}>
                {item.name}
                <div className="dot"></div>
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
