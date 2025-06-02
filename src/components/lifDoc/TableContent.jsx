import { Nav } from 'react-bootstrap';
import logo from '../../assets/Lif.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TableContent.css';

const Sidebar = () => {
  return (
    <Nav className="lif-sidebar lif-sidebar-row">
      <img src={logo} alt="Lif Logo" className="lif-sidebar-logo" />
      <Nav className="lif-sidebar-links">
        <Button as={Link} to="/" className="back-button mb-4 btn btn-primary">Back to Home</Button>
        <h4 className="text-muted mb-4">Table of Contents</h4>
        <Nav.Link href="#introduction">Introduction</Nav.Link>
        <Nav.Link href="#getting-started">Getting Started</Nav.Link>
        <Nav.Link href="#dsl">DSL Syntax Reference</Nav.Link>
        <Nav.Link href="#layout">Layout System</Nav.Link>
        <Nav.Link href="#properties">Properties & Styling</Nav.Link>
        <Nav.Link href="#events">Events & Actions</Nav.Link>
        <Nav.Link href="#faqs">FAQs</Nav.Link>
      </Nav>
    </Nav>
  );
};

export default Sidebar;
