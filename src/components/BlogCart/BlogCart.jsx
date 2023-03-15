import React from 'react';
import Blog1 from './../../assets/images/blog-1.jpg';
import { Link } from 'react-router-dom';

const BlogCart = () => {
    return (
        <div className="blog-card ">
            <div className="card-img">
                <img className="img-fluid w-100" src={Blog1} alt={Blog1} />
            </div>
            <div className="blog-content">
                <p className="date">1 Dec,2022</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat error illum nihil distinctio,
                    veniam animi obcaecati debitis est libero, expedita alias, laborum dolores magni nulla porro
                    doloremque sit eligendi aspernatur!
                </p>
                <Link to="/blog/:id" className="btn">
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default BlogCart;
