import React from 'react';
import contact from '../../images/contact.gif'

const Contact = () => {
    return (
        <div className="text-danger pt-5 mt-p">
            <h1 className="text-center border border-info p-2 mt-3 rounded-pill">Contact Me</h1>
            <div className="row">
                <div className="col-md-6">
                    <img className="w-100 pt-3" src={contact} alt="" />
                </div>
                <div className="col-md-6 pt-5 mb-5">
                    <h2 className="text-info">Contact me by email here.</h2>
                    <input placeholder="Your Name" className="input-group input-lg" type="text" /><br />
                    <input type="email" placeholder="email" className="input-group input-lg" /><br />
                    <input style={{ height: '100px' }} placeholder="Description" className="input-group input-lg" type="text" /><br />
                    <button className="btn-danger p-2">Submit</button>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                    <div className="col-md-4 text-center">
                        <h2>Hello</h2>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2>hello2</h2>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2>hello3</h2>
                    </div>
                </div>
        </div>
    );
};

export default Contact;