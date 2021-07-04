import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BlogDetail = ({ blog }) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center p-3 project-detail-card" data-aos="flip-left"  data-aos-duration="2000">
            <div className="m-1 p-2 h-100 box-shadow-style">
                <div className="text-center p-2">
                    <img className="w-100" src={blog.img} alt="" />
                </div>
                <h5 className="text-warning p-2">How to {blog.title}?</h5>
                <p className="text-success">{blog.description}</p>
                <a href={blog.link} className="btn btn-danger m-2">Read Continue... <FontAwesomeIcon icon={faSignInAlt} /></a>
            </div>
        </div>
    );
};

export default BlogDetail;