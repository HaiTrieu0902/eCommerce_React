import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import ReactStars from 'react-rating-stars-component';
import Watch from '../../assets/images/watch.jpg';
import ProductCart from './../../components/ProductCart/ProductCart';
import gr from '../../assets/images/gr.svg';
import gr1 from '../../assets/images/gr2.svg';
import gr2 from '../../assets/images/gr3.svg';
import gr3 from '../../assets/images/gr4.svg';
import Color from '../../components/Color/Color';
import Container from './../../components/Container/Container';
const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={'Our Store'}></Meta>
            <BreadCrumb title="Our Store"></BreadCrumb>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop by Categories</h3>
                            <div>
                                <ul>
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Available</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="11" />
                                        <label htmlFor="">In Stock(2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                            defaultChecked
                                        />
                                        <label htmlFor=""> Out of Stock(0)</label>
                                    </div>
                                </div>
                                <h5 className="sub-title mt-4">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating mt-1 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating mt-1 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Color</h5>
                                <div className="d-flex flex-wrap">
                                    <Color />
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="11" />
                                        <label htmlFor="">S</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                            defaultChecked
                                        />
                                        <label htmlFor="">M</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="11" />
                                        <label htmlFor="">L</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light py-2 px-3 text-secondary rounded-3">Headphone</span>
                                    <span className="badge bg-light py-2 px-3 text-secondary rounded-3">Watch</span>
                                    <span className="badge bg-light py-2 px-3 text-secondary rounded-3">TV</span>
                                    <span className="badge bg-light py-2 px-3 text-secondary rounded-3">Mobile</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Random Product</h3>
                            <div>
                                <div className="random-product d-flex">
                                    <div className="w-50">
                                        <img className="img-fluid" src={Watch} alt={Watch} />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kid headphone bulk 10 pack multi colored for students</h5>
                                        <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                                <div className="random-product d-flex">
                                    <div className="w-50">
                                        <img className="img-fluid" src={Watch} alt={Watch} />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kid headphone bulk 10 pack multi colored for students</h5>
                                        <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p style={{ width: '100px' }} className="mb-0 d-block">
                                        Sort By
                                    </p>
                                    <select
                                        defaultValue={'best-selling'}
                                        className="form-control form-select"
                                        name=""
                                        id=""
                                    >
                                        <option value="manaul">Feature</option>
                                        <option value="best-selling" selected="selected">
                                            Best Selling
                                        </option>
                                        <option value="az">A - Z</option>
                                        <option value="za">Z - A</option>
                                        <option value="low">Price: low to high</option>
                                        <option value="high">Price: high to low</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">21 Product</p>
                                    <div className="d-flex align-items-center gap-10 grid">
                                        <img
                                            src={gr3}
                                            onClick={() => {
                                                setGrid(3);
                                            }}
                                            className="d-block img-fluid"
                                            alt=""
                                        />
                                        <img
                                            src={gr2}
                                            onClick={() => {
                                                setGrid(4);
                                            }}
                                            className="d-block img-fluid"
                                            alt=""
                                        />
                                        <img
                                            src={gr1}
                                            onClick={() => {
                                                setGrid(6);
                                            }}
                                            className="d-block img-fluid"
                                            alt=""
                                        />
                                        <img
                                            src={gr}
                                            onClick={() => {
                                                setGrid(12);
                                            }}
                                            className="d-block img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCart grid={grid}></ProductCart>
                                    <ProductCart grid={grid}></ProductCart>
                                    <ProductCart grid={grid}></ProductCart>
                                    <ProductCart grid={grid}></ProductCart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurStore;
