import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

// import "../../../public/logo.jpeg"


// import { logout } from "./../../actions/userActions";
import { logout } from '../../redux/userRedux'


const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.user.currentUser);


  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" fixed="sticky">
      <LinkContainer to="/">
        <Navbar.Brand className="nav-cal ">
          <img  width="80px" src="logo.jpeg" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <LinkContainer to="/">
            <Nav.Link className="nav-cal">HOME</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/chat">
            <Nav.Link className="nav-cal">CHAT</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link className="nav-cal">PROFILE</Nav.Link>
          </LinkContainer>
          <LinkContainer to="login?redirect=supplier">
            <Nav.Link className="nav-cal"></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/news">
            <Nav.Link className="nav-cal"></Nav.Link>
          </LinkContainer>
     
          {userLogin ? (
            <NavDropdown  className={`${
                userLogin ? "remove-space" : "add-space cart nav-cal"
              } `} title={userLogin.username.toUpperCase()} id="username">
              {/* {userInfo && userInfo.isAdmin && (
                <LinkContainer to="/admin/dashboard">
                  <NavDropdown.Item>DASHBOARD</NavDropdown.Item>
                </LinkContainer>
              )} */}
              {/* <LinkContainer to="/profile" >
                <NavDropdown.Item>PROFILE</NavDropdown.Item>
              </LinkContainer> */}
              <LinkContainer to="/login/investor">
                <NavDropdown.Item onClick={logoutHandler}>
                  LOGOUT
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          ) : (
            <>

            <LinkContainer className={`${
                userLogin ? "remove-space" : "add-space cart nav-cal"
              } `} to="/login">
              <Nav.Link className="login nav-cal">SIGN IN</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
            <Nav.Link className="nav-cal">REGISTER</Nav.Link>
          </LinkContainer>
            </>
          )}
          {/* {userInfo && userInfo.isAdmin && (
            <NavDropdown title="ADMIN" id="adminmenu">
              <LinkContainer to="/admin/userlist">
                <NavDropdown.Item>USERS</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/productlist">
                <NavDropdown.Item>PRODUCTS</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/orderlist">
                <NavDropdown.Item>ORDERS</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;













