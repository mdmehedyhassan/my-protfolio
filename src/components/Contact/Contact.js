import React from 'react';
import contact from '../../images/contact.gif'
import mobile from '../../images/mobile.gif'
import email from '../../images/email.gif'
import location from '../../images/location.gif'

const Contact = () => {
    return (
        <div className="text-danger pt-5 mt-p">
            <h1 className="text-center border border-info p-2 mt-3 rounded-pill"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">Contact Me</h1>
            <div className="row">
                <div className="col-md-6"  data-aos="fade-right" data-aos-offset="300" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                    <img className="w-100 pt-3" src={contact} alt="" />
                </div>
                <div className="col-md-6 pt-5 mb-5"  data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                    <h2 className="text-info">Contact me by email here.</h2>
                    <input placeholder="Your Name" className="input-group input-lg" type="text" /><br />
                    <input type="email" placeholder="email" className="input-group input-lg" /><br />
                    <input style={{ height: '100px' }} placeholder="Description" className="input-group input-lg" type="text" /><br />
                    <button className="btn-danger p-2">Submit</button>
                </div>
            </div>
            <div className="row mt-5 mb-5 ">
                <div className="col-md-4 btn text-center project-detail-card" data-aos="flip-left"  data-aos-duration="3000">
                    <div className="h-100 box-shadow-style">
                        <div>
                            <img className="w-100 p-2" src={mobile} alt="" />
                        </div>
                        <div>
                            <h2 className="text-warning">Mobile Number</h2>
                            <h5 className="text-success">+880 1870 289 584</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 btn text-center project-detail-card"  data-aos="flip-left"  data-aos-duration="3000">
                    <div className="h-100 box-shadow-style">
                        <div>
                            <img className="w-100 p-2" src={email} alt="" />
                        </div>
                        <div>
                            <h2 className="text-warning">Email Address</h2>
                            <h5 className="text-success">mdmehedyh55@gamil.com</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 btn text-center project-detail-card"  data-aos="flip-left"  data-aos-duration="3000">
                    <div className="h-100 box-shadow-style">
                        <div>
                            <img className="w-100 p-2" src={location} alt="" />
                        </div>
                        <div>
                            <h2 className="text-warning">Location</h2>
                            <h5 className="text-success">383/B, Khilgaon Taltola, Dhaka-1219</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;