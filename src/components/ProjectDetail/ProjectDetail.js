import { faFileCode, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectDetail.css'

const ProjectDetail = ({ project }) => {
    return (
        <div className="col-md-6 " data-aos="zoom-in-up" data-aos-duration="3000">
            <div className="m-2 text-success">
                <Card className='project-detail-card box-shadow-style' id="project-background" style={{ width: '100%', border: '3px solid red', borderRadius: '15px' }}>
                    <div className='p-3'>
                        <Card.Img style={{ border: '3px solid red', borderRadius: '10px' }} variant="top" src={project.img} />
                    </div>
                    <Card.Body>
                        <Card.Title style={{fontSize: '2em'}} className="text-primary"><b>{project.title}</b></Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}><b className="text-danger">Info:</b> {project.description}</Card.Text>
                        <Card.Text style={{ textAlign: 'justify' }}><b className="text-danger">technology:</b> {project.technology}</Card.Text>
                        <a className="  btn btn-danger m-2" href={project.liveLink}   > <FontAwesomeIcon icon={faFileImage} /> Live Site</a>
                        <a className="btn btn-danger m-2" href={project.codeLink}   ><FontAwesomeIcon icon={faFileCode} /> GitHub code link </a>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ProjectDetail;