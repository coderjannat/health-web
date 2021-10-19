import React, { useEffect, useState } from 'react';
import './Services.css';
import { useParams } from 'react-router';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Services = () => {
    let { serviceId } = useParams();

    const [drugsDetails, setDrugsDetails] = useState([]);
    const [singleDrug, setSingleDrug] = useState({});
    const url = 'https://raw.githubusercontent.com/ferdousz/drugdetail/main/drugsDetails.json';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.drug);
                setDrugsDetails(data.drug);
            })
    }, []);

    useEffect(() => {
        const foundDrug= drugsDetails.find(drug => drug.id == serviceId);
        console.log(foundDrug);
        setSingleDrug(foundDrug);
    }, [ drugsDetails ]);


    return (
        <>
          <Container>
  <Row xs={1} md={1}  className="align-items-center">
    <Col xs={12} md={6}>
      <Image className="mt-4 me-3" src={singleDrug?.img} rounded />
    </Col>
    <Col xs={12} md={6} >
     <h3 >{singleDrug?.description}</h3>
     <h5>Tk.{singleDrug?.price}</h5>
     <Link to="/loginandregistration">
     <Button>Add too Cart</Button>
     </Link>
    </Col>
   
  </Row>
</Container>
</>
    );
};

export default Services;