import React from 'react';
import About1 from '../../svg/About1.svg'
import About2 from '../../svg/About2.svg'

const About = () => {
    return (
        <div className="mb-5 pb-5 mt-5 pt-5">
            <h2 className="text-center text-danger border border-info pb-2 rounded-pill">About</h2>
            <div className="text-center">
                <img className="w-50" src={About1} alt="" />
            </div>
            <div className="row  text-success">
                <div className="col-md-6 col-12 p-2  project-detail-card">
                    <p className="h-100 box-shadow-style"><b className="  text-warning">Myself:</b> I am Mehedy Hassan. I am a Professional Web Developer. I can do HTML, CSS, JS React & others programming languages in professionally. I have learned web development since 2020. Now I can do all kinds of web development work. I always want to learn something new and benefit people through it.</p>
                </div>
                <div className="col-md-6 col-12 p-2  project-detail-card">
                    <p className="h-100 box-shadow-style"><b className="  text-warning">Diligent Project Management:</b> Offering a proven record of success leading all phases of diverse React  Projects, Solutions Designs, Enterprise Deployments, Cross Platform Migrations, Annual Maintenance Support etc etc… I like to learn new things and I like to do something new all the time. I am happy when people benefit from my work. </p>
                </div>
                <div className="col-md-6 col-12 p-2  project-detail-card">
                    <p className="h-100 box-shadow-style"><b className="  text-warning">Business Strategist:</b> Plan and Manage high value projects aligning business goals with technology solutions to drive process improvements, competitive advantage and bottom-line gains. Apply change of Strategy when necessary to produce high-quality deliverables which meets timeline and budgetary targets.</p>
                </div>
                <div className="col-md-6 col-12 p-2  project-detail-card">
                    <p className="h-100 box-shadow-style"><b className="  text-warning">Excellent Communicator:</b> Leverage Technical, Business and Financial acumen to communicate effectively with client executives and their respective teams. Conducting Productive Corporate Trainings as MCT, to create opportunity of future business continuation and keep customers aligned with industries best practice.</p>
                </div>
            </div>
            <div className="text-danger pt-5 mt-5">
                <h2 className="p-2 mb-2 text-center border rounded-pill border-info">Skills</h2>
                <div className="text-center">
                    <img className="w-75" src={About2} alt="" />
                </div>
                <div className="row ">
                    <p className="col-md-2">CSS</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">90%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">HTML</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '95%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">95%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">JavaScript</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">90%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">React</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">85%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Bootstrap</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">90%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Node.js</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">85%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Material ui</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">80%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Express.js</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '60%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">60%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Mongodb</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">70%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Firebase</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">60%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Heroku</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">75%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="col-md-2">Redux</p>
                    <div className="col-md-10">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <p className="pt-3">70%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;