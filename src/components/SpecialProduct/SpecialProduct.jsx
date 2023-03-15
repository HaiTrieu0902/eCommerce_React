import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import Watch from './../../assets/images/watch.jpg';

const SpecialProduct = () => {
    return (
        <div className="col-6 mb-4">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img className="img-fluid" src={Watch} alt={Watch} />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Havels</h5>
                        <h6 className="title">Samsung Galaxy Note10+...</h6>
                        <ReactStars count={5} value={4} size={24} activeColor="#ffd700" />
                        <p className="price">
                            <span className="red-p">$100</span>
                            &nbsp;
                            <strike className="trike"> $200</strike>
                        </p>
                        <div className="discount-till d-flex flex-wrap align-items-center gap-10">
                            <p className="mb-0">
                                <b>5 </b>days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge bg-danger rounded-circle p-3">5d</span>:
                                <span className="badge bg-danger rounded-circle p-3">6h</span>:
                                <span className="badge bg-danger rounded-circle p-3">3p</span>
                            </div>
                            <div className="prod-count mt-3">
                                <p> Product: 5</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: '25%' }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <Link to="/cart" className="btn btn-prod mt-2">
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
