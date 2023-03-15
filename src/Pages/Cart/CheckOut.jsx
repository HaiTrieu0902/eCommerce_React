import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import Watch from './../../assets/images/watch.jpg';
import Container from './../../components/Container/Container';

const CheckOut = () => {
    return (
        <>
            <Meta title={'Check Out'}></Meta>
            <BreadCrumb title="Check Out"></BreadCrumb>

            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="check-left-data">
                            <div className="website-name">
                                <h3>Ecommerce</h3>
                                <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className="text-dark" to="/cart">
                                                Cart
                                            </Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Information
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Payment
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Shipping
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact information</h4>
                                <p className="user-data">Htrieu (haitrieu0902@gmail.com)</p>
                                <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                                    <div className="w-100">
                                        <select name="" className="form-control" id="">
                                            <option value="" selected disabled>
                                                Select Country
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="First name" className="form-control" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Last name" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Address" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            placeholder="Apartment, Suite,etc"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="City" className="form-control" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <select name="" className="form-control" id="">
                                            <option value="" selected disabled>
                                                Select State
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Zipcode" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between gap-15">
                                            <Link className="btn" to="/cart">
                                                Return to cart
                                            </Link>
                                            <Link className="btn">Continue to shopping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10">
                                <div className="w-100 d-flex gap-10">
                                    <div className="w-25 position-relative">
                                        <span className="quality-checkout position-absolute">1</span>
                                        <img className="img-fluid" src={Watch} alt="" />
                                    </div>
                                    <div>
                                        <h5 className="title">aloaloal</h5>
                                        <p>s / trieie</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5>$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Subtotal</p>
                                <p>$1000</p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <p>Shipping</p>
                                <p>$12</p>
                            </div>
                        </div>

                        <div>
                            <div className="d-flex mt-4 justify-content-between align-items-center">
                                <h4>Total</h4>
                                <h5>$1200</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CheckOut;
