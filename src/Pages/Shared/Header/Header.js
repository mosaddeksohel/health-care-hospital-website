import userEvent from '@testing-library/user-event';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../useFirebase/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();
    return (


        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">Health Care</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/pricing">Our Doctors</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            {user.email ?
                                <button onClick={logout}>Log Out</button>
                                :
                                <Nav.Link href="/login">login</Nav.Link>}
                            <Navbar.Text>
                                <a href="/login">{user.name}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>


    );
};

export default Header;