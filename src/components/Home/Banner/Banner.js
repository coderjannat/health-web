import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel id ="home">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn11.bigcommerce.com/s-fe8s4uj/images/stencil/960w/carousel/545/Natures_Truth_1021.jpg?c=2"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn11.bigcommerce.com/s-fe8s4uj/images/stencil/960w/carousel/546/Sauve1021.jpg?c=2"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn11.bigcommerce.com/s-fe8s4uj/images/stencil/960w/carousel/547/bactekillpromotion__91710.jpg?c=2"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;