import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './OnlineService.css';
import img2 from '../../../images/backroun2.png';

const OnlineService = () => {
    return (
        <div id="delivery" className="mb-5 mt-4">
            <h1 className="text-center mb-3">Online Store</h1>
            <Container className="onlineService">

                <Row className="justify-content-md-center p-5">
                    <Col xs={12} md={6} className="mt-2 mb-2">
                        <Image style={{ width: '60%' }} src={img2} thumbnail />
                    </Col>
                    {/* <Col md="auto">Variable width content</Col> */}
                    <Col xs={12} md={6} >
                        <div className="align-items-center mt-5">
                            <h3 className="text-center">Online Delivery</h3>
                            <p>We also provide online delivery which is fast and easy . Go to playstore and download our app.We ensure the best quality and service in a very resionable price!!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OnlineService;