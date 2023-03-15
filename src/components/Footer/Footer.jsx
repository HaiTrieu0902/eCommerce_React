import React from 'react';
import { Link } from 'react-router-dom';
import newsLetter from './../../assets/images/newsletter.png';
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs';
const footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container container__config">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex align-items-center gap-30">
                                <img src={newsLetter} alt={newsLetter} />
                                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address..."
                                    aria-label="Your Email Address..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text py-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container container__config">
                    <div className="row">
                        <div className="col-3">
                            <h4 className="text-white mb-4">Contact</h4>
                            <div>
                                <address className="text-white fs-5">
                                    64 Tương mai <br />
                                    Hai Bà Trưng <br />
                                    Hà Nội
                                </address>
                                <a className="mt-3 mb-1 d-block text-white fs-4" href="tel:+84328618265">
                                    +84 328618265
                                </a>
                                <a className="mt-2 mb-0 d-block text-white fs-4" href="mailto:haitrieu0902@gmail.com">
                                    Haitrieu0902@gmail.com
                                </a>
                                <div className="social-icons d-flex align-items-center gap-15 mt-3">
                                    <a href="a" className="text-white">
                                        <BsLinkedin className="fs-5" />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        href="https://www.facebook.com/trieuql123"
                                        target="_blank"
                                        className="text-white"
                                    >
                                        <BsFacebook className="fs-5" />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.instagram.com/?hl=fr"
                                        className="text-white"
                                    >
                                        <BsInstagram className="fs-5" />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://github.com/HaiTrieu0902"
                                        className="text-white"
                                    >
                                        <BsGithub className="fs-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="">
                                    Privicy Policy
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Refund Policy
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Shipping Policy
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Term & Conditions
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Blogs Policy
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">About</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="">
                                    About
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Fag
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Quick Link</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="">
                                    Laptops
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Headphones
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Tablets
                                </Link>
                                <Link className="text-white py-2 mb-1" to="">
                                    Watchs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container container__config">
                    <div className="row">
                        <div className="col-12 mb-0 text-white">
                            <p className="text-center">&copy; {new Date().getFullYear()}: Powered by Hai Trieu</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default footer;
