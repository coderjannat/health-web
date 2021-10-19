import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Drug from '../Drug/Drug';

const Drugs = () => {
    const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        fetch('./drugs.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setDrugs(data)
            })

    }, []);

    return (
        <div id="drugs">
            <div className="text-center">
                <h1 className="mt-5">Drugs Store</h1>
                <Row xs={1} md={3} className="g-4 mt-3 ms-4 me-4">
                    {
                        drugs.map(drug => <Drug key={drug.id} drug={drug}> </Drug>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Drugs;