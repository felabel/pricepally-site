import React from 'react'
import Rating from '../rating/Rating';

const ProductCard = ({ id, image, name, discount, price, reviewsCount, rate }) => {
    const money = (value) => `₦${value.toLocaleString('en-US')}`
    return (
        <div className="col-md-6 col-lg-3" key={id}>
            <div className="pally-inner ">
                <div className="products-img-wrapper  mb-3 pointer">
                    <a href="#">
                        <div className="heart-icon">
                            <span className="material-icons">
                                favorite_border
                            </span>
                        </div>
                        <img className="mb-3 product-img" src={image} alt={name} />
                    </a>
                </div>

                <div className="pally-content">
                    <a href="#" className="inner-head">
                        <h5 className="mb-2">{name} </h5>
                    </a>
                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                        arrow_right_alt
                    </span>{discount}% | <span className="clr-red">Off Season</span></a>
                    <h5 className="mb-2 mt-2 font-weight-bold simhead">{money(price - (discount / 100 * price))} {"  "}
                        <s>{money(price)}</s>
                    </h5>
                    <section className='rating-widget'>
                        <div className="rating-main pro-detail-star" data-vote="0">
                            <div className="star">
                                <span>
                                    <Rating
                                        rating={rate} numOfReviews={reviewsCount}
                                    />
                                </span>
                                <span>{reviewsCount}</span>

                            </div>
                        </div>
                        <div className='success-box'>
                            <div className='text-message'></div>
                        </div>
                    </section>
                    <a href="#">
                        <button type="button" className="brown-btn  text-uppercase btn-effects ">
                            SELECT ORDER TYPE
                        </button>
                    </a>
                </div>

            </div>
        </div>
    )
}
export default ProductCard
