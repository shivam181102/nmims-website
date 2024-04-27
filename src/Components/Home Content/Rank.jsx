import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Rank() {
  return (
    <Card>
        <Card.Body style={{fontSize:"20px",fontWeight:"bolder"}}>
            <Row>
                <Col><h5>Sem : 1 Cycle : Dec 2023</h5></Col>
            </Row>
            <Row >
                <Col>
                <i style={{fontSize:"50px"}} class="bi bi-award-fill"></i>
                </Col>
                <Col>
                <p style={{color:'rgb(220, 53, 69)'}}>1/1</p>
                <p>My Rank</p>
                </Col>
                <Col>
                <i style={{fontSize:"50px"}} class="bi bi-trophy-fill"></i>
                </Col>
                <Col>
                <p style={{color:'rgb(220, 53, 69)'}}>402/600</p>
                <p>Total Score</p>
                </Col>
            </Row>
        </Card.Body>
    </Card>
  )
}

export default Rank