import React from 'react';

function DoctorDetails(props) {

    let data = props.location.state

    const { d } = data

    return (
        <section id="doctors" className="d-doctors">
            <div className="container">
                <div className="col-12 row">
                    <div className="member d-flex">
                        <div className='col-6 d-doctor-align'>
                            <div className='pic'><img src={d.img} className='img-d-doctor' alt /></div>

                        </div>

                        <div className='col-6 d-doctor-align'>
                            <div className="member-info">
                                <h4>Name: {d.name}</h4>
                                <span>Designation: {d.designation}</span>
                                <p>Description: {d.ldescription}</p>
                                <p className='wd'>Phone: {d.phone}</p>
                                <p className='wd'>Addres: {d.add}</p>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /></a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section >
    );
}

export default DoctorDetails;