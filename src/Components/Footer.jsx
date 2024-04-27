import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(220, 53, 69)', color: 'white', padding: '20px' }}>
      {/* <Container> */}
        <Row>
          <Col>
            <h5>Reach Us:</h5>
            <p>1800-1025-136 (Toll Free)</p>
            <p>Connect With Us</p>
          </Col>
          <Col>
            <h5>Visit Us:</h5>
            <p>V.L.Mehta Road, Vile Parle (W)</p>
            <p>Mumbai, Maharashtra - 400056</p>
          </Col>
          <Col>
            <h5>Connect with us:</h5>
            <i class="bi px-1 bi-facebook"></i>
            <i class="bi px-1 bi-twitter"></i>
            <i class="bi px-1 bi-youtube"></i>
            <i class="bi px-1 bi-linkedin"></i>
            <i class="bi px-1 bi-instagram"></i>
            
            
          </Col>
          <Col>
            <h5>Chat With Us:</h5>
            <i class="bi bi-chat-dots"></i>
          </Col>
        </Row>
        
        <Row><Col><p>© 2024 NMIMS. All Rights Reserved.</p></Col></Row>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
