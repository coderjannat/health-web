import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AboutUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>

            <Row className="m-4 pt-5">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)} className="pt-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" defaultValue="test" {...register("example")} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control {...register("exampleRequired", { required: true })} type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="outline-dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs={6} md={6}>
                    <Image src={"https://image.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37375.jpg"} thumbnail/>
                </Col>
            </Row>
        </>
    );
};

export default AboutUs;