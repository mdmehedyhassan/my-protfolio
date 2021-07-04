import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import blog from '../../images/blog.png'

const blogDetails =[
    { 
        id: 0,
        title: 'Today I am bringing you the fact of 10 JavaScript.',
        description: 'If I really want to write an article, I can save it in the index. This rate work is that if I want to find an article, it will tell me how many words this article contains. If I want to publish...',
        img: 'https://miro.medium.com/max/414/1*uYCV_BYLt_ug9nRcowK71g.png',
        link: 'https://mdmehedyh55.medium.com/today-i-come-up-with-a-solution-to-10-new-problems-86787a561945'
    },
    {
        id: 1,
        title: 'How to solve the problem of JavaScript.',
        description: 'Many times we get errors due to out mistake or not giving code or some other reason and this catch error is done to handle that error. If for some reason an error occurs then if we want to see...',
        img: 'https://miro.medium.com/max/414/1*YG9mayXIf3Lsa6Uf2i8Uew.jpeg',
        link: 'https://mdmehedyh55.medium.com/how-to-solve-the-problem-of-javascript-e01d7954fa5c'
    },
    {
        id: 2,
        title: 'How to work React? I come with you for 10 fact in React.',
        description: 'ReactJS is a medium where you can smooth out all the JavaScript, HTML & CSS together if you want. React is very easy to use due to which its popularity is increasing day by day...',
        img: 'https://miro.medium.com/max/414/1*-bCARnWrK9r3OYTGLA7uDw.png',
        link: 'https://mdmehedyh55.medium.com/how-to-work-react-i-come-with-you-for-10-fact-in-react-c7ba7bd5ba3c'
    }
]

const Blog = () => {
    return (
        <div>
            <h1 className="text-center text-danger border border-info p-2 rounded-pill"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">My Articles </h1>
            <div className="text-center"  data-aos="zoom-in-down"  data-aos-duration="3000">
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