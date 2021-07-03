import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import resume from '../../images/resume.gif'

const Resume = () => {
    return (
        <div className="text-light pt-5 mt-5 pb-5 mb-5">
            <h1 className="text-center text-danger border border-info p-2 mt-3 rounded-pill">Resume, Education, Work History</h1>
            <div className="text-center">
                <img className="w-75" src={resume} alt=""/>
            </div>
            <div className="row">
                <div className="col-md-6 col-12 project-detail-card">
                    <div className="box-shadow-style">
                        <div className="text-center">
                            <h1 className="text-warning">Work History</h1>
                            <h5 className="text-danger">(Jan 2020 - Current)</h5>
                            <h5 className="text-danger"> <b>Computer Operator</b></h5>
                            <h6 className="text-info">Prime School & College, Dhaka</h6>
                        </div>
                        <ul className="text-danger">
                            <li>Changed and replaced backup tapes regularly and performed detailed server backups.</li>
                            <li>Generated reports covering details about data, system operation and error monitoring. </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-12 project-detail-card">
                    <div className="box-shadow-style">
                        <h1 className="text-center text-warning ">Education</h1>
                        <h5 className="text-danger">Jul 2018 - Current</h5>
                        <h5 className="text-danger">Bachelor of Science: matchers</h5>
                        <h6 className="text-info">Siddeshwari College, Dhaka</h6>
                        <br />
                        <h5 className="text-danger">Jun 2015 - June 2018</h5>
                        <h5 className="text-danger">Science Education</h5>
                        <h6 className="text-info">Khilgaon Model University College, Dhaka</h6>
                    </div>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-md-3"></div>
                <div className="col-md-6 col-12 project-detail-card">
                    <div className="box-shadow-style">
                        <h1 className="text-center text-warning">Resume</h1>
                        <h4 className="text-info" style={{ textAlign: 'justify'}}> I am full Stack web Developer. If you want to view or download my resume, click on the button below.</h4>
                        <div className="text-center">
                            <a className="btn btn-danger" href="https://drive.google.com/file/d/1quuqu9NmjQz4eSFOkHzfX2kLE0TqXeDV/view"><FontAwesomeIcon icon={faDownload} />  Download Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Resume;