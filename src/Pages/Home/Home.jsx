import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import ProductCart from './../../components/ProductCart/ProductCart';
import SpecialProduct from './../../components/SpecialProduct/SpecialProduct';
import BlogCart from '../../components/BlogCart/BlogCart';
import Meta from './../../components/Meta/Meta';
import { Services, Brands, BannersTitle, productsInfo } from '../../Utils/Data';

import mainBanner from './../../assets/images/main-banner-1.jpg';

import Container from './../../components/Container/Container';

const Home = () => {
    return (
        <>
            <Meta title={'Home'}></Meta>

            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-6 ">
                        <div className="main-banner position-relative py-3">
                            <img src={mainBanner} alt={mainBanner} className="img-fluid rounded-3" />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPER SALE</h4>
                                <h5>iPhone14 pro</h5>
                                <p>
                                    Price: <small>25.500.500 vnđ</small>{' '}
                                </p>
                                <Link className="btn">Buy Now </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="d-flex  flex-wrap justify-content-between align-items-center">
                            {BannersTitle.map((item, index) => {
                                return (
                                    <div key={index} className="small-banner position-relative py-3">
                                        <img src={item.image} alt={item.title} className="img-fluid rounded-3" />
                                        <div className="small-banner-content position-absolute">
                                            <h4>{item.title}</h4>
                                            <h5>{item.tagLine}</h5>
                                            <p>
                                                Price: <small>{item.price}</small>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12 ">
                        <div className="services d-flex align-items-center justify-content-between">
                            {Services.map((item, index) => {
                                return (
                                    <div key={index} className="d-flex services-item align-items-center gap-10">
                                        <img src={item.image} alt={item.title} />
                                        <div>
                                            <h6>{item.title}</h6>
                                            <p className="mb-0">{item.tagLine}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="categories flex-wrap d-flex justify-content-between align-content-center">
                            {productsInfo.map((product, index) => {
                                return (
                                    <div key={index} className="d-flex gap-30 align-items-center">
                                        <div className="w-50">
                                            <h6 className="fs-5">{product.name}</h6>
                                            <p>{product.quality}</p>
                                        </div>
                                        <div className="categories-item w-50">
                                            <img src={product.image} alt={product.image} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="feature-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Featured Collection</h3>
                    </div>
                    <ProductCart></ProductCart>
                </div>
            </Container>

            <Container class1="special-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Product</h3>
                    </div>
                </div>
                <div className="row">
                    <SpecialProduct></SpecialProduct>
                    <SpecialProduct></SpecialProduct>
                    <SpecialProduct></SpecialProduct>
                    <SpecialProduct></SpecialProduct>
                </div>
            </Container>

            <Container class1="polular-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Product</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCart></ProductCart>
                </div>
            </Container>

            <Container class1="marque-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee>
                                {Brands.map((brand) => (
                                    <div key={brand.id} className="mx-4 w-20">
                                        <img src={brand.image} alt="brand" />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Latest Blogs</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 ">
                        <BlogCart></BlogCart>
                    </div>
                    <div className="col-3">
                        <BlogCart></BlogCart>
                    </div>
                    <div className="col-3">
                        <BlogCart></BlogCart>
                    </div>
                    <div className="col-3">
                        <BlogCart></BlogCart>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
