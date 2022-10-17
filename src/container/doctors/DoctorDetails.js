import React, { useEffect, useState } from 'react';

function DoctorDetails(props) {

    const [Details,setDetails] = useState('')

    let data = props.location.state

    console.log(data);

    

    useEffect(()=>{
        let Data = JSON.parse(localStorage.getItem("Doctor-Details"))
        Data.find((l)=>{
            if(l.id === data.id){
                setDetails(l);
            }
        })
    },[])

    
    console.log(Details);
    return (
        <section id="doctors" className="d-doctors">
            <div className="container">
                <div className="col-12 row">
                    <div className="member d-flex">
                        <div className='col-6 d-doctor-align'>
                            <div className='pic'><img src={Details.img} className='img-d-doctor' alt /></div>

                        </div>

                        <div className='col-6 d-doctor-align'>
                            <div className="member-info">
                                <h4>Name: {Details.name}</h4>
                                <span>Designation: {Details.designation}</span>
                                <p>Description: {Details.ldescription}</p>
                                <p className='wd'>Phone: {Details.phone}</p>
                                <p className='wd'>Addres: {Details.add}</p>
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