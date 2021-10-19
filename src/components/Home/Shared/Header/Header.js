import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Login/hooks/useAuth';
import { AiOutlineHome } from 'react-icons/ai';
import { GiTreeGrowth} from 'react-icons/gi';
import { FaCarAlt} from 'react-icons/fa';
import {MdOutlinePermContactCalendar} from 'react-icons/md';


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span className="text-success fw-bolder fs-3">M</span>edHelp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5 ps-3">
              <Nav.Link  as={HashLink} to="/home#home">
              <AiOutlineHome size={25} className="ms-2"/>
              <div>Home</div></Nav.Link>
              <Nav.Link className="ps-4" as={HashLink} to="/success#Success">
              <GiTreeGrowth size={25} className="ms-3"/>
                <div>Success</div></Nav.Link>
              <Nav.Link className="ps-4" as={HashLink} to="#delivery">
              <FaCarAlt size={25} className="ms-3"/>
                <div>Delivery</div></Nav.Link>
              <Nav.Link className="ps-4" as={HashLink} to="/aboutus#aboutus">
              <MdOutlinePermContactCalendar size={25} className="ms-3"/>
                <div>About Us</div></Nav.Link>

            </Nav> 
            <Nav>
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
              {user?.displayName && <Button onClick={logOut} className="ms-2 mt-1 mb-4" size="sm" variant="outline-light">Sign Out</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;