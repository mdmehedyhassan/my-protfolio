import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BlogDetail = ({ blog }) => {
    return (
        <div className="col-md-4 col-sm-6 text-center p-3 project-detail-card">
            <div className="border border-danger border-5 rounded-3 m-1 p-2">
                <div className="text-center">
                    <img className="w-75" src={blog.img} alt="" />
                </div>
                <h3 className="text-danger p-2">{blog.title}</h3>
                <p className="text-info">{blog.description}</p>
                <a href={blog.link} className="btn btn-danger m-2">Continue... <FontAwesomeIcon icon={faSignInAlt} /></a>
            </div>
        </div>
    );
};

export default BlogDetail;