import React from 'react'
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap';
import catmeow from '../assets/catmeow.png'
const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <img style={{maxWidth: '100%', height: '50px', paddingRight: '10px' }} src = {catmeow} alt='neko-manga'/>
            <LinkContainer to='/'>
              <NavbarBrand>Neko-Manga</NavbarBrand>
              </LinkContainer>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse aria-controls="basic-navbar-nav">
              <Nav className="ms-auto"> 
                <LinkContainer to='/'>
                  <Nav.Link> <FaShoppingCart /> Shopping Cart</Nav.Link>
                  </LinkContainer>
                <LinkContainer to='/'>
                <Nav.Link> <FaUser /> User Page </Nav.Link>
                </LinkContainer>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header;
