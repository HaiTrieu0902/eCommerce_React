import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import cross from '../../assets/images/cross.svg';
import Watch from '../../assets/images/watch.jpg';
import Color from './../../components/Color/Color';
import Container from './../../components/Container/Container';
const CompareProduct = () => {
    return (
        <>
            <Meta title={'Compare Products'}></Meta>
            <BreadCrumb title="Compare Products"></BreadCrumb>
            <Container class1="compare-product-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
                            <div className="compare-product-img">
                                <img src={Watch} alt="" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Lenovo Gaming 3 16GR with 6G wifi Bruh</h5>
                                <h6 className="price mb-3">$999</h6>
                                <div>
                                    <div className="product-details">
                                        <h5>Brand:</h5>
                                        <h6>Lenovo</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type:</h5>
                                        <h6>Havels</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Availabilty:</h5>
                                        <h6>Havels</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <h6>Havels</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <Color></Color>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
                            <div className="compare-product-img">
                                <img src={Watch} alt="" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Lenovo Gaming 3 16GR with 6G wifi Bruh</h5>
                                <h6 className="price mb-3">$999</h6>
                                <div>
                                    <div className="product-details">
                                        <h5>Brand:</h5>
                                        <h6>Lenovo</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type:</h5>
                                        <h6>Havels</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Availabilty:</h5>
                                        <h6>Havels</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <h6>Havels</h6>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <Color></Color>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CompareProduct;
