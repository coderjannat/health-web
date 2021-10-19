import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Drug.css';



const Drug = ({drug}) => {
     const { id,name,img,price } = drug;
    return (

<Col  >
        
      <Card className = "card shadow  mb-5 bg-body" >
        <Card.Img  variant="top" src={img} />
        <Card.Body>
          <Card.Title className ="text-center">{name}</Card.Title>
          {/* <Card.Text>
            This is a longer card with supporting text
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <div className="d-flex align-items-center justify-content-between ">
                <h3 className="text-warning fw-bold">$ {price}</h3>
               <Link to = {`/services/${id}`}>
               <Button className="card_btn" variant="outline-dark">Book Now</Button></Link>
           </div>
          </Card.Footer>
      </Card>
    </Col>


    );
};

export default Drug;