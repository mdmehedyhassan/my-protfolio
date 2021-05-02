import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';

const blogDetails =[
    {
        id: 1,
        title: 'Learn HTML',
        description: 'HTML is the markup language used for structuring and presenting content on the World Wide Web.',
        img: 'https://i.ibb.co/Lp0vm3Z/html.png',
        link: 'https://medium.com/free-code-camp/learn-html-in-5-minutes-ccd378d2ab72'
    },
    {
        id: 2,
        title: 'Learn CSS',
        description: 'The last few weeks I’ve been digging my head into CSS Grid and created a full course on the subject.',
        img: 'https://i.ibb.co/tXwZQZg/css.png',
        link: 'https://medium.com/free-code-camp/heres-my-free-css-grid-course-merry-christmas-3826dd24f098'
    },
    {
        id: 3,
        title: 'Learn JavaScript',
        description: 'This is a walk-through of the steps I personally took in a single year, to begin learning JavaScript. ',
        img: 'https://i.ibb.co/3W2zCxg/js.png',
        link: 'https://medium.com/javascript-scene/learn-javascript-b631a4af11f2'
    },
    {
        id: 4,
        title: 'Learn React',
        description: 'This tutorial will give you a basic understanding of React by building a very simple application. ',
        img: 'https://i.ibb.co/zXZK66T/react.png',
        link: 'https://medium.com/free-code-camp/learn-react-js-in-5-minutes-526472d292f4'
    },
    {
        id: 5,
        title: 'Learn Bootstrap',
        description: 'This January, Bootstrap 4 (aka v4) finally got released after being in alpha for over two years. ',
        img: 'https://i.ibb.co/CHqmKGV/bootstrap.png',
        link: 'https://medium.com/free-code-camp/learn-bootstrap-4-in-5-minutes-da94728efe41'
    }
]

const Blog = () => {
    return (
        <div>
            <h1 className="text-center text-danger">This is blog</h1>
            <div className="row">
                {
                    blogDetails.map(blog => <BlogDetail key={blog.id} blog={blog}></BlogDetail>)
                }
            </div>
        </div>
    );
};

export default Blog;