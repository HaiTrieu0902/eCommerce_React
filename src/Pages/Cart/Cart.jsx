import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import Watch from './../../assets/images/watch.jpg';
import Container from '../../components/Container/Container';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Meta title={'Cart'}></Meta>
            <BreadCrumb title="Cart"></BreadCrumb>
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-content-center">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quality</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>
                        <div className="cart-data d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 d-flex align-items-center mt-4 mb-4">
                                <div className="w-25">
                                    <img src={Watch} className="img-fluid" alt="" />
                                </div>
                                <div className="w-75 px-3">
                                    <h5 className="title">ahi</h5>
                                    <p className="color">d</p>
                                    <p className="size">d</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$100</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input
                                        className="form-control"
                                        min={1}
                                        max={10}
                                        type="number"
                                        name="number"
                                        id=""
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">$100</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <Link to="/product/:id" className="btn">
                                    To Shopping
                                </Link>
                            </div>
                            <div>
                                <h4>Subtotal: $500</h4>
                                <p>Taxes shiping caculated at checkout</p>
                                <Link to="/checkout" className="btn">
                                    Check Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
