import React, { useEffect, useState } from 'react';

function DoctorDetails(props) {

    const [Details,setDetails] = useState('')

    let data = props.location.state

    console.log(data);

    const Data = [
        { id: "1", name: "Marklin Lora", img: "../assets/img/doctors/doctors-1.jpg", designation: "Chief Medical Officer", description: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",ldescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" },
        { id: "2", name: "John White", img: "../assets/img/doctors/doctors-2.jpg", designation: "Anesthesiologist", description: "Aenean ac turpis ante. Mauris velit sapien.", ldescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" },
        { id: "3", name: "Umika Loha", img: "../assets/img/doctors/doctors-3.jpg", designation: "Cardiology", description: "Curabitur luctus eleifend odio. Phasellus placerat mi.", ldescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" },
        { id: "4", name: "Daimy Smith", img: "../assets/img/doctors/doctors-4.jpg", designation: "Neurosurgeon", description: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.", ldescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" }
    ]

    useEffect(()=>{
        let Ddata = Data.find((l)=>{
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