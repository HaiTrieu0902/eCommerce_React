import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import { Link } from 'react-router-dom';
import Container from './../../components/Container/Container';
const Login = () => {
    return (
        <>
            <Meta title={'Login'}></Meta>
            <BreadCrumb title="Login"></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input className="form-control" type="email" placeholder="Email..." name="email" />
                                </div>
                                <div>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="password..."
                                        name="password"
                                    />
                                </div>
                                <div>
                                    <Link className="text-dark" to="/forgot-password">
                                        Forgot Password ?
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center gap-15 align-items-center">
                                    <button className="btn  border-0">Login</button>
                                    <Link to="/sign-up" className="btn signup">
                                        SignUp
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

export default Login;
