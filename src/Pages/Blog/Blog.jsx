import React from 'react';
import Meta from './../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import BlogCart from './../../components/BlogCart/BlogCart';
import Container from '../../components/Container/Container';
const Blog = () => {
    return (
        <>
            <Meta title={'Blogs'}></Meta>
            <BreadCrumb title="Blogs" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Find by Categories</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <BlogCart />
                            </div>
                            <div className="col-6 mb-3">
                                <BlogCart />
                            </div>
                            <div className="col-6 mb-3">
                                <BlogCart />
                            </div>
                            <div className="col-6 mb-3">
                                <BlogCart />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blog;
