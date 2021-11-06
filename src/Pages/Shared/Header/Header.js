import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const {user,logOut} = useAuth()

  return (
    <div className="mb-5">
      <Navbar expand="lg " bg="success" fixed="top">
        <Container>
          <Navbar.Brand href="/">
           <span className="text-danger fw-bold" >World</span><span className="text-light fw-bold" >Tour</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {
                user?.email && <Nav.Link as={Link} to="/order">
                My Order
              </Nav.Link>
              }
              {
                user?.email && <Nav.Link as={Link} to="/createNewEvent">
                Create New Event
              </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link as={Link} to="/management">
                Managment
              </Nav.Link>
              }
            </Nav>
            <div className="">
            </div>

            {
              (user?.email) ? <Link to="/login">
              <button  className="bg-danger text-light rounded " onClick={logOut}>Log out</button>
            </Link> : <Link to="/login">
              <button className="bg-danger text-light rounded" >Login</button>
            </Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
