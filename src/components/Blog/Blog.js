import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import blog from '../../images/blog.png'

const blogDetails =[
    { 
        id: 0,
        title: '10 Fact of JavaScript.',
        description: 'Today I am bringing you the fact of 10 JavaScript.',
        img: 'https://miro.medium.com/max/414/1*RNZECH5nCJGldJFOshDfjA.jpeg',
        link: 'https://mdmehedyh55.medium.com/today-i-come-up-with-a-solution-to-10-new-problems-86787a561945'
    },
    {
        id: 1,
        title: '10 Fact of JavaScript.',
        description: 'Today I am bringing you the fact of 10 JavaScript.',
        img: 'https://miro.medium.com/max/414/1*RNZECH5nCJGldJFOshDfjA.jpeg',
        link: 'https://mdmehedyh55.medium.com/today-i-come-up-with-a-solution-to-10-new-problems-86787a561945'
    },
    {
        id: 2,
        title: '10 Fact of JavaScript.',
        description: 'Today I am bringing you the fact of 10 JavaScript.',
        img: 'https://miro.medium.com/max/414/1*RNZECH5nCJGldJFOshDfjA.jpeg',
        link: 'https://mdmehedyh55.medium.com/today-i-come-up-with-a-solution-to-10-new-problems-86787a561945'
    }
]

const Blog = () => {
    return (
        <div>
            <h1 className="text-center text-danger border border-info p-2 rounded-pill">My Articles </h1>
            <div className="text-center">
               <img className="w-75" src={blog} alt=""/>
            </div>
            <div className="row">
                {
                    blogDetails.map(blog => <BlogDetail key={blog.id} blog={blog}></BlogDetail>)
                }
            </div>
        </div>
    );
};

export default Blog;