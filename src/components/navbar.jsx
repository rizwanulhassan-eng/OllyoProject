import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

const NavbarUIX = () => {
    return (
        <header>
            <div className="logo">
                <div className="thundericon">
                <i class="fa-solid fa-bolt fa-sm"></i>
                </div>
                <p> FasterUI </p>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">How it works</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
            </nav>
            <div className="login">
                <p>Sign In</p>
                <button > Sign Up </button>
            </div>
        </header>
    );
}

export default NavbarUIX;