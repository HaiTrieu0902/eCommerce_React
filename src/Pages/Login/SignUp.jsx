import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';

import Container from './../../components/Container/Container';
const SignUp = () => {
    return (
        <>
            <Meta title={'Sign Up'}></Meta>
            <BreadCrumb title="Sign Up"></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input className="form-control" type="text" placeholder="Name..." name="name" />
                                </div>
                                <div>
                                    <input className="form-control" type="email" placeholder="Email..." name="email" />
                                </div>
                                <div>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Password..."
                                        name="password"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Confirm Password..."
                                        name="Confirmpassword"
                                    />
                                </div>

                                <div className="d-flex justify-content-center gap-15 align-items-center">
                                    <button type="submit" className="btn border-0">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SignUp;
