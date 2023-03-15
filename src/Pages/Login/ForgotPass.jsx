import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import { Link } from 'react-router-dom';
import Container from './../../components/Container/Container';
const ForgotPass = () => {
    return (
        <>
            <Meta title={'Forgot Password'}></Meta>
            <BreadCrumb title="Forgot Password"></BreadCrumb>

            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center mb-3">Reset Your Password</h3>
                            <p className="text-center mb-3">We will send you an email to reset your password</p>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input className="form-control" type="email" placeholder="Email..." name="email" />
                                </div>
                                <div className="d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button className="btn  border-0" type="submit">
                                        Submit
                                    </button>
                                    <Link to="/login" className="text-dark">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ForgotPass;
