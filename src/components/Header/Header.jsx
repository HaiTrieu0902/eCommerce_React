import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './../../assets/css/style.css';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineCompare } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import MenuButton from '../../assets/images/menu.svg';
import Logo from '../../assets/images/hih.png';

const Header = () => {
    return (
        <div className="header-main">
            <header className="header-upper py-5">
                <div className="container container__config">
                    <div className="row align-items-center">
                        <div className="col-2 col-md-0">
                            <div className="header-logo">
                                <Link to="/">
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-4  header-input">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    placeholder="Search..."
                                    aria-label="Search..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text py-3" id="basic-addon2">
                                    <BsSearch />
                                </span>
                            </div>
                        </div>
                        <div className="col-6 header-menu">
                            <div className="header-upper-links active d-flex align-items-center justify-content-between">
                                <div className="header-upper-menu">
                                    <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                                        <MdOutlineCompare className="header-icon" />
                                        <p className="mb-0">
                                            Compare <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div className="header-upper-menu">
                                    <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                                        <AiOutlineHeart className="header-icon" />
                                        <p className="mb-0">
                                            Favourite <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div className="header-upper-menu">
                                    <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                                        <RiAccountPinCircleLine className="header-icon" />
                                        <p className="mb-0">
                                            Login <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div className="header-upper-menu">
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                        <AiOutlineShoppingCart className="header-icon-cart"></AiOutlineShoppingCart>
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container container__config">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={MenuButton} alt="" />
                                            <span className="me-5 d-inline-block">Show Categories</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink className="text-white" to="/">
                                            Home
                                        </NavLink>
                                        <NavLink className="text-white" to="/store">
                                            Store
                                        </NavLink>
                                        <NavLink className="text-white" to="/blogs">
                                            Blogs
                                        </NavLink>
                                        <NavLink className="text-white" to="/contact">
                                            Contact
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
