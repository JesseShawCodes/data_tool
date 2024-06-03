import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useUser from './hooks/useUser';

export default function NavBar() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/">Data App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
  user
    ? (
      <Nav className="me-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/export">Export</Nav.Link>
      </Nav>
    )
    : null
  }
          {
  user
    ? (
      <Navbar.Text>
        Signed in as:
        {user.email}
      </Navbar.Text>
    ) : ''
  }

        </Navbar.Collapse>
        <Navbar.Text className="justify-content-end">
          { user
            ? (
              <button type="button" className="btn btn-secondary" onClick={() => { signOut(getAuth()); }}>
                Logout
              </button>
            ) : (
              <button type="button" className="btn btn-secondary" onClick={() => { navigate('/login'); }}>
                Login
              </button>
            ) }
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
