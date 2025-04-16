import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import "../App.css"; 

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand 
  href="#home" 
  style={{
    color: '#ffd700', 
    fontSize: '15px', 
    fontWeight: '600', 
    textTransform: 'uppercase', 
    letterSpacing: '2px', 
    display: 'inline-flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: '12px 20px', 
    borderRadius: '8px', 
    backgroundColor: '#1a1a2e', 
    boxShadow: '0 0 8px #ffd700', 
    transition: 'all 0.3s ease', 
    animation: 'glow 1.5s ease-in-out infinite alternate',
    fontFamily: '"Roboto Mono", monospace', 
    textShadow: '2px 2px 4px rgba(255, 215, 0, 0.6)', 
  }}
  onMouseEnter={(e) => {
    e.target.style.color = '#1a1a2e'; 
    e.target.style.backgroundColor = '#ffd700'; 
    e.target.style.boxShadow = '0 0 20px #ffd700, 0 0 30px #ffd700'; 
    e.target.style.transform = 'scale(1.05)';
    e.target.style.textShadow = '2px 2px 8px rgba(255, 215, 0, 0.8)';
  }}
  onMouseLeave={(e) => {
    e.target.style.color = '#ffd700'; 
    e.target.style.backgroundColor = '#1a1a2e'; 
    e.target.style.boxShadow = '0 0 8px #ffd700'; 
    e.target.style.transform = 'scale(1)';
    e.target.style.textShadow = '2px 2px 4px rgba(255, 215, 0, 0.6)';
  }}
>
  My Portfolio
</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FaBars style={{ color: 'white', fontSize: '1.5rem' }} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
