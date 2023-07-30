import '../css/navbar.css'
import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import GenresHandler from './GenresHandler/GenresHandler';

const NavBar = () => {

    const [ showGenres, setShowGenres ] = useState(false); 

    return (
        <>
            <Navbar  variant="dark" expand="lg" className='bg-dark-transparent'>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='navbarBrand'><i class='bx bx-podcast'></i>&nbsp; Music App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className='navItem'>Songs</Nav.Link>
                            <Nav.Link as={Link} to="/artists" className='navItem'>Artists</Nav.Link>
                            <Nav.Link as={Link} to="/albums" className='navItem'>Albums</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)} className='navItem'>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresHandler show={showGenres} handleClose={() => setShowGenres(false)} />
        </>
    );
};

export default NavBar;