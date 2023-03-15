/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import { AiFillHome, AiFillMail, AiFillInfoCircle } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import Container from './../../components/Container/Container';
const Contact = () => {
    return (
        <>
            <Meta title={'Contact'}></Meta>
            <BreadCrumb title="Contact"></BreadCrumb>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29798.511902323113!2d105.81809262574255!3d21.00009221983949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac71752d8f79%3A0xd2ec575c01017afa!2sNational%20Economics%20University%20(NEU)!5e0!3m2!1sen!2s!4v1678377180387!5m2!1sen!2s"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title">Contact</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input placeholder="Name..." className="form-control" type="text" />
                                    </div>
                                    <div>
                                        <input placeholder="Email..." className="form-control" type="text" />
                                    </div>
                                    <div>
                                        <input placeholder="Phone Number..." className="form-control" type="text" />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="Enter your comments..."
                                            className="w-100 form-control"
                                            rows="4"
                                            cols="30"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button className="btn btn-prod">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title">Get in touch with Us</h3>
                                <div>
                                    <ul className="ps-0 d-flex flex-column ">
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiFillHome className="fs-5" />
                                            <address className="mb-0"> Hai Ba Trung, Ha Noi</address>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <FiPhoneCall className="fs-5" />
                                            <a href="tel:+84 0328618265">+84 328618265</a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiFillMail className="fs-5" />
                                            <a href="mailto: haitrieu0902@gmail.com">haitrieu0902@gmail.com</a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiFillInfoCircle className="fs-5" />
                                            <p className="mb-0"> Monday - Friday 9AM - 10PM </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
