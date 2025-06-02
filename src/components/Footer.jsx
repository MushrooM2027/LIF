import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FeedbackForm from './Feedback'; // Assuming you have a FeedbackForm component
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <FeedbackForm />
        {/* <div className="footer-yellow-block"></div> */}
        <div className="footer-content">
          <Row>
            <Col md={10}>
              <h5>Build system</h5>
              <p>
                LIF implements a custom GUI compiler framework with powerful features: real-time interface rendering, 
                intuitive natural-language syntax parsing, and seamless one-click execution are among the most notable.
              </p>
              <h5>Debugging</h5>
              <p>
                The LIF Studio environment has been significantly enhanced in the latest version. Live syntax error detection, 
                real-time GUI rendering, instant feedback on invalid DSL statements, and integrated compile-run flow are just a few of its key features. 
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-copyright"><strong>Made with ♡ by Aditya & Rajan | ©2025 All Rights Reserved</strong></div>
    </footer>
  );
};

export default Footer;
