import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';

const Accondion = () => {
  return (
    < >
      <Container >
        <h5>FREQUENTLY ASKED QUESTIONS</h5>
        <h2>Your Questions are Answerd</h2>
        <Row>
          <Col xs={12} md={7}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Whats is objective of the company?</Accordion.Header>
                <Accordion.Body>
                  The main objectives of ensuring abundant availability, at reasonable
                  prices, of essential life saving by Effective and safe treatments.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>what services does that company provide?</Accordion.Header>
                <Accordion.Body>
                  We provide services that transmit the knowledge and skills they have at their command to physicians, other pharmacists, and patients.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Purpose Of that Company?</Accordion.Header>
                <Accordion.Body>
                  The main objectives of ensuring abundant availability, at reasonable
                  prices, of essential life saving
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={6} md={5}>
            <Image src={"https://image.freepik.com/free-vector/medical-set-objects_80328-71.jpg"} thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Accondion;