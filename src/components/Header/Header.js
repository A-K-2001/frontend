import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import "./Header.css";

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
        <Navbar.Brand className="nav-cal">
          <Image className="logoimg" width="80px" src="https://media.istockphoto.com/vectors/handshake-sign-in-the-circle-on-white-background-vector-illustration-vector-id1141219682?k=20&m=1141219682&s=612x612&w=0&h=IdYdsGuPtnie5wgKycEjGrtCbi48O4g0yUK1B5Zzjhs=" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <LinkContainer to="/">
            <Nav.Link className="nav-cal">HOME</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/farmer">
            <Nav.Link className="nav-cal">FARMER</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/consumer">
            <Nav.Link className="nav-cal">CONSUMER</Nav.Link>
          </LinkContainer>
          <LinkContainer to="login?redirect=supplier">
            <Nav.Link className="nav-cal">SUPPLIER</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/news">
            <Nav.Link className="nav-cal">FEEDS</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to="/cart">
            <Nav.Link
              className={`${
                userLogin ? "remove-space" : "add-space cart nav-cal"
              } `}
            >
              <i className="fas fa-shopping-cart"></i>
              CART
            </Nav.Link>
          </LinkContainer> */}
          {userLogin ? (
            <NavDropdown  className={`${
                userLogin ? "remove-space" : "add-space cart nav-cal"
              } `} title={userLogin.username.toUpperCase()} id="username">
              {/* {userInfo && userInfo.isAdmin && (
                <LinkContainer to="/admin/dashboard">
                  <NavDropdown.Item>DASHBOARD</NavDropdown.Item>
                </LinkContainer>
              )} */}
              <LinkContainer to="/profile" >
                <NavDropdown.Item>PROFILE</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/login/investor">
                <NavDropdown.Item onClick={logoutHandler}>
                  LOGOUT
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          ) : (
            <LinkContainer className={`${
                userLogin ? "remove-space" : "add-space cart nav-cal"
              } `} to="/login/investor">
              <Nav.Link className="login nav-cal">SIGN IN</Nav.Link>
            </LinkContainer>
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













