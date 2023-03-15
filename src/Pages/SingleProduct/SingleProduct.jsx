import React, { useState } from 'react';
import Meta from './../../components/Meta/Meta';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ReactImageZoom from 'react-image-zoom';
import watch from './../../assets/images/watch.jpg';
import { BiGitCompare } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import Color from './../../components/Color/Color';
import Container from './../../components/Container/Container';
const SingleProduct = () => {
    const props = {
        width: 400,
        height: 500,
        zoomWidth: 500,
        img: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3-2.png?v=1653637007',
    };
    const [orderProduct, setOderProduct] = useState(true);

    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

    return (
        <>
            <Meta title={'Product Id'}></Meta>
            <BreadCrumb title="Product Id"></BreadCrumb>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-img">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images flex-wrap d-flex gap-15">
                            <div>
                                <img className="img-fluid" src={watch} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={watch} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={watch} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={watch} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">Kid headphone buik 10 pack colored for students</h3>
                            </div>
                            <div className="border-bottom">
                                <h3 className="price">$100.00</h3>
                            </div>

                            <div className="border-bottom py-3">
                                <div className="d-flex  gap-10 align-items-center my-4">
                                    <h3 className="product-head">Type: </h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex  gap-10 align-items-center my-4">
                                    <h3 className="product-head">Brand: </h3>
                                    <p className="product-data">Havels</p>
                                </div>
                                <div className="d-flex  gap-10 align-items-center my-4">
                                    <h3 className="product-head">Category: </h3>
                                    <p className="product-data">DFd</p>
                                </div>
                                <div className="d-flex  gap-10 align-items-center my-4">
                                    <h3 className="product-head">Tag: </h3>
                                    <p className="product-data">In stock</p>
                                </div>
                                <div className="d-flex flex-column gap-10 mt-3 mb-3">
                                    <h3 className="product-head">Size: </h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            S
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            L
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            XL
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            XXL
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-3 mb-3">
                                    <h3 className="product-head">Color: </h3>
                                    <Color></Color>
                                </div>
                                <div className="d-flex gap-10 align-items-center flex-row mt-3 mb-3">
                                    <h3 className="product-head">Quality: </h3>
                                    <div className="">
                                        <input
                                            type="number"
                                            min={1}
                                            max={10}
                                            className="form-control"
                                            style={{ width: '50px' }}
                                            id="quality"
                                            name="quality"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button className="btn border-0">Add to cart</button>
                                        <button className="btn signup">Buy now</button>
                                    </div>
                                </div>
                                <div className="d-flex gap-15 align-items-center">
                                    <div>
                                        <a href="a" className="text-dark">
                                            <BiGitCompare /> Add to Compare
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="a" className="text-dark">
                                            <AiFillHeart /> Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-10  my-4">
                                    <h3 className="product-head">Shipping & Returns: </h3>
                                    <p className="product-data">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum consequuntur
                                        quisquam nulla in est
                                        <b> Lorem ipsum dolor sit</b>
                                    </p>
                                </div>
                                <div className="d-flex flex-column  gap-10  my-4">
                                    <h3 className="product-head">Shipping & Returns: </h3>
                                    <a
                                        href="javasript:void(0)"
                                        onClick={() => {
                                            copyToClipboard();
                                        }}
                                    >
                                        U u
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <section className="decription-wrapper home-wrapper-2 py-5">
                <div className="container container__config">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Desciption</h4>
                                <p className="mt-4">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aut excepturi
                                    nihil id. Quae atque, debitis quisquam ipsa dolorem reiciendis. Maxime modi in,
                                    fugiat, officiis dolorum error, placeat culpa aspernatur aliquid ducimus labore
                                    nostrum? Obcaecati velit itaque, deleniti harum recusandae excepturi sunt iure, enim
                                    assumenda consequatur dolore dolorem nam commodi non? Ducimus, alias non odit hic
                                    perferendis repellat pariatur sit iste dolores ratione aut magnam harum. Quasi
                                    nesciunt optio, maiores ipsam, reprehenderit et vitae accusamus in perspiciatis esse
                                    magnam? Officiis at fugit aut, iure sapiente ducimus, a facilis eveniet, adipisci
                                    vel doloremque aspernatur ratione sed nam saepe accusantium veritatis molestiae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews-wrapper home-wrapper-2 py-5">
                <div className="container container__config">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-head">
                                <div className="review-head d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                edit={false}
                                                count={5}
                                                size={24}
                                                value="4"
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">Base on 2 reviews</p>
                                        </div>
                                    </div>
                                    {orderProduct && (
                                        <div>
                                            <a className="text-dark text-decoration-underline" href="ds">
                                                Write a review
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="review-form py-4">
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <h4 className="mb-2 fs-4 mt-5">Write Reviews</h4>
                                            <ReactStars count={5} size={24} value="4" activeColor="#ffd700" />
                                        </div>
                                        <div>
                                            <textarea
                                                placeholder="Enter your comments..."
                                                className="w-100 form-control"
                                                rows="6"
                                                cols="30"
                                            ></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-prod">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="review-clients">
                                    <div className="review-client">
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-0">Alex HaiTrieu</h4>
                                            <ReactStars
                                                edit={false}
                                                count={5}
                                                size={24}
                                                value="4"
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
                                            aspernatur deleniti voluptatibus dolore distinctio, velit sint incidunt
                                            impedit vero totam sit minus, omnis harum quam adipisci atque amet nobis
                                            sapiente?
                                        </p>
                                    </div>
                                    <div className="review-client mt-5">
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-0">Alex HaiTrieu</h4>
                                            <ReactStars
                                                edit={false}
                                                count={5}
                                                size={24}
                                                value="4"
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
                                            aspernatur deleniti voluptatibus dolore distinctio, velit sint incidunt
                                            impedit vero totam sit minus, omnis harum quam adipisci atque amet nobis
                                            sapiente?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
