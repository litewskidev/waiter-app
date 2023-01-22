import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return(
    <div>
      <Navbar bg='primary' variant='dark' className='rounded mt-4 mb-4'>
      <Container>
        <Navbar.Brand>Waiter.app</Navbar.Brand>
        <Nav className='justify-content-end'>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;
