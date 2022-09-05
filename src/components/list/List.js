import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

function List({ data }) {
    console.log(data);
    
    return (
        <>
            {
                data.map((d, i) => (
                    <div className='col-4 mb-3'>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5" style={{color: '#FF6337'}}>
                                {d.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Price: {d.price}
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                    </div>
                ))
            }

        </>
    );
}

export default List;