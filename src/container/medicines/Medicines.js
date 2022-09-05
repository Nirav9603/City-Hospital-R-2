import React from 'react';
import List from '../../components/list/List';

function Medicines(props) {

    const orgData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021
        },
        {
            id: 106,
            name: 'Amifostine',
            quantity: 60,
            price: 200,
            expiry: 2021
        }
    ]

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Medicines</h2>
                    </div>
                    <div className='row'>
                        <List data={orgData} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Medicines;