import React from 'react';
import { NavLink } from 'react-router-dom';

function Doctors(props) {

    const Data = [
        { id: "1", name: "Marklin Lora", img: "../assets/img/doctors/doctors-1.jpg", designation: "Chief Medical Officer", description: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.", ldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" },
        { id: "2", name: "John White", img: "../assets/img/doctors/doctors-2.jpg", designation: "Anesthesiologist", description: "Aenean ac turpis ante. Mauris velit sapien.", ldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" },
        { id: "3", name: "Umika Loha", img: "../assets/img/doctors/doctors-3.jpg", designation: "Cardiology", description: "Curabitur luctus eleifend odio. Phasellus placerat mi.", ldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" },
        { id: "4", name: "Daimy Smith", img: "../assets/img/doctors/doctors-4.jpg", designation: "Neurosurgeon", description: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.", ldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" },
        { id: "5", name: "Saimy Cmith", img: "../assets/img/doctors/doctors-5.jpg", designation: "Neurosurgeon", description: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.", ldescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", phone: "98756 12345", add: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" }
    ]

    localStorage.setItem("Doctor-Details", JSON.stringify(Data))
    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                    <div className="row">
                        {
                            Data.map((d, i) => (
                                <div className="col-6">
                                    <NavLink to={{
                                        pathname: "/doctor_details",
                                        state: { id: d.id }
                                    }}>

                                        <div className="member d-flex align-items-start">
                                            <div className="pic"><img src={d.img} className="img-doctor" alt /></div>
                                            <div className="member-info">
                                                <h4>{d.name}</h4>
                                                <span>{d.designation}</span>
                                                <p>{d.description}</p>
                                                <div className="social">
                                                    <a href><i className="ri-twitter-fill" /></a>
                                                    <a href><i className="ri-facebook-fill" /></a>
                                                    <a href><i className="ri-instagram-fill" /></a>
                                                    <a href> <i className="ri-linkedin-box-fill" /></a>
                                                </div>
                                            </div>
                                        </div>

                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Doctors;