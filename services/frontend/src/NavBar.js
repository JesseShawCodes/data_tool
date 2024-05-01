import { Link, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';
import { getAuth, signOut } from 'firebase/auth';

/* React Bootstrap*/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Data App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                {
                    user ?
                    <Nav className="me-auto">
                        <Nav.Link href="/about">Home</Nav.Link>
                        <Nav.Link href="/export">Export</Nav.Link>
                    </Nav>
                    :
                    ""
                }
                {
                    user ? 
                    <Navbar.Text>
                        Signed in as: {user.email}
                    </Navbar.Text> : ""
                }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;