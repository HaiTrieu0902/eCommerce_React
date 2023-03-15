import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

import addCart from './../../assets/images/add-cart.svg';
import View from './../../assets/images/view.svg';
import prodcompare from './../../assets/images/prodcompare.svg';
import Wish from './../../assets/images/wish.svg';

import { FeaturedCollection } from '../../Utils/Product';

const ProductCart = (props) => {
    const { grid } = props;

    let location = useLocation();
    return (
        <>
            {FeaturedCollection.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={` ${location.pathname === '/store' ? `gr-${grid}` : 'col-3'} product-card-contain `}
                    >
                        <div className="product-card position-relative gap-10">
                            <div className="wishlist-icon position-absolute">
                                <Link>
                                    <img src={Wish} alt="" />
                                </Link>
                            </div>
                            <Link to="/product/:id">
                                <div className="product-img">
                                    <img className="wishlist-img" src={item.image1} alt="" />
                                    <img className="wishlist-img" src={item.image2} alt="" />
                                </div>
                            </Link>
                            <div className="product-details">
                                <h6 className="brand">{item.brand}</h6>
                                <h5 className="product-title">{item.title}</h5>
                                <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
                                <p className={`desc ${grid === 12 ? 'd-block' : 'd-none'}`}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam unde quis, sunt
                                    explicabo rem nobis debitis iste? Suscipit, debitis exercitationem. Quam soluta
                                    repellat dolor quas obcaecati rem nemo at temporibus!
                                </p>
                                <p className="prouct-price">{item.price}</p>
                            </div>

                            <div className="action-bar position-absolute">
                                <div className="d-flex flex-column">
                                    <Link>
                                        <img src={prodcompare} alt="" />
                                    </Link>
                                    <Link>
                                        <img src={View} alt="" />
                                    </Link>
                                    <Link>
                                        <img src={addCart} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            {/* <div className={` ${location.pathname === '/store' ? `gr-${grid}` : 'col-3'} `}>
                <div className="product-card position-relative gap-10">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src={Wish} alt="" />
                        </Link>
                    </div>
                    <Link to="/product/:id">
                        <div className="product-img">
                            <img className="wishlist-img" alt="" />
                            <img className="wishlist-img" alt="" />
                        </div>
                    </Link>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">Kid headphone bulk 10 pack mlti colored for students</h5>
                        <ReactStars count={5} size={24} value="4" activeColor="#ffd700" />
                        <p className={`desc ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam unde quis, sunt explicabo rem
                            nobis debitis iste? Suscipit, debitis exercitationem. Quam soluta repellat dolor quas
                            obcaecati rem nemo at temporibus!
                        </p>
                        <p className="prouct-price">$100</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link>
                                <img src={prodcompare} alt="" />
                            </Link>
                            <Link>
                                <img src={View} alt="" />
                            </Link>
                            <Link>
                                <img src={addCart} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default ProductCart;
