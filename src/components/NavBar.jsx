//style
import "../css/navBarSt.css";
//bts
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
//comp.
import HomeWidget from './HomeWidget';
import CartWidget from './CartWidget';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {cartHookCtxt} from "../context/CartContext"


function NavBar() {

  const {qtyOfBoughtProducts} = useContext(cartHookCtxt);

  return (
    <>
      <Navbar bg="dark" variant="dark" id="navBar">
        <Container className="m-0">
          <Navbar.Brand>
            <HomeWidget />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/category/fruits">
              <Button variant="outline-light" className="btnNavBar">Frutas</Button>
            </NavLink>
            <NavLink to="/category/vegetables">
              <Button variant="outline-light" className="btnNavBar">Verduras</Button>
            </NavLink>
          </Nav>
          {
            qtyOfBoughtProducts>0 &&
            <CartWidget qtyOfBoughtProducts={qtyOfBoughtProducts} />
          }
        </Container>
      </Navbar>
    </>
  );
}



export default NavBar;