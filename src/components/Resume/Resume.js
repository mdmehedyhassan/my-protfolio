import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Resume = () => {
    return (
        <div className="text-light pt-5 mt-5 pb-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <div className=" border border-danger border-5 rounded-3 m-1 p-2">
                        <div className="text-center">
                            <h1 className="text-warning">Work History</h1>
                            <h5 className="text-danger">(Jan 2020 - Current)</h5>
                            <h5 className="text-danger"> <b>Computer Operator</b></h5>
                            <h6 className="text-info">Prime School & College, Dhaka</h6>
                        </div>
                        <ul>
                            <li>Changed and replaced backup tapes regularly and performed detailed server backups.</li>
                            <li>Generated reports covering details about data, system operation and error monitoring. </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="border border-danger border-5 rounded-3 m-1 p-2">
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
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="border border-danger border-5 rounded-3 m-1 p-2">
                        <h1 className="text-center text-warning">Resume</h1>
                        <h4 style={{ textAlign: 'justify' }}> I am full Stack web Developer. If you want to view or download my resume, click on the button below.</h4>
                        <a className="btn btn-success"  href="https://drive.google.com/file/d/1quuqu9NmjQz4eSFOkHzfX2kLE0TqXeDV/view"><FontAwesomeIcon icon={faDownload} />  Download Resume</a>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Resume;