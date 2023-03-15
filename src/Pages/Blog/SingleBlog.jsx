import React from 'react';
import Meta from './../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Blog1 from './../../assets/images/blog-1.jpg';
import { Link } from 'react-router-dom';

import { BsArrowLeftShort } from 'react-icons/bs';

const SingleBlog = () => {
    return (
        <>
            <Meta title={'Read Blog'}></Meta>
            <BreadCrumb title="Read Blog"></BreadCrumb>
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container container__config">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="single-blog-card">
                                <Link to="/blogs" className="d-flex align-items-center mb-3">
                                    <BsArrowLeftShort />
                                    Go back to Blog
                                </Link>
                                <h3 className="title">A beautiful Sunday Moring in Ha Noi</h3>
                                <img className="img-fluid w-100 my-4" src={Blog1} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum soluta blanditiis,
                                    nobis iusto repellendus aspernatur? Doloremque sequi neque tempore dolore dicta
                                    aperiam minima magnam labore repellendus, libero aspernatur eos optio, expedita
                                    natus harum distinctio. Adipisci ex optio, facilis numquam iusto vero omnis, nisi
                                    nihil, rerum aspernatur sapiente explicabo voluptates. Ea.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;
