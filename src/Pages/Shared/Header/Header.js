import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../useFirebase/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
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
                            <Nav.Link href="/doctor">Our Doctors</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Navbar.Text>
                            </Navbar.Text>
                            <span className='text-white mx-2'>{user.displayName}</span>
                            {user.displayName || user.email ?
                                <button onClick={logOut}>Log Out</button>
                                : <Nav.Link href="/login">login</Nav.Link>}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Header;