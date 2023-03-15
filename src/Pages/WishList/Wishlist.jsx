import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from './../../components/Meta/Meta';
import cross from '../../assets/images/cross.svg';
import Watch from '../../assets/images/watch.jpg';
import Container from './../../components/Container/Container';
const Wishlist = () => {
    return (
        <>
            <Meta title={'WishList'}></Meta>
            <BreadCrumb title="WishList"></BreadCrumb>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image img-fluid">
                                <img src={Watch} alt="" />
                            </div>
                            <div className="bg-white py-3">
                                <h5 className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                <h6 className="price">$999</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Wishlist;
