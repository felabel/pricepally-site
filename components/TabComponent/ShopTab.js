import React from 'react'

const ShopTab = () => {
  return (
    <div>
        <div className="tab-pane show preorder-bg fade" id="shop" role="tabpanel" aria-labelledby="pre-orders-tab">
            <h6 className="inner-head mb-3 mt-3">3 Available Deals</h6>
            <div className="">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Pre-order1.png" alt="Pre-order1" />
                                </a>
                            </div>

                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Strawberries</h5>
                                </a>
                                <a href="#" className="red-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>9% | In Season</a>
                                <h6 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 per kg</h6>
                                <p className="text-red mb-2">1kg of 50kg left</p>
                                <div className="preorder-progress stat-bar mb-2">
                                    <span className="stat-bar-rating" role="stat-bar" style={{width:"80%"}}>80%</span>
                                </div>
                                <p className="mb-2 dgrey-clr">Delivery Date: July 23rd 2021</p>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects " data-toggle="modal" data-target="#preorderModal">Book
                                        Now</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Pre-order2.png" alt="Pre-order2" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Strawberries</h5>
                                </a>
                                <a href="#" className="red-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>9% | In Season</a>
                                <h6 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 per kg</h6>
                                <p className="text-red mb-2">1kg of 50kg left</p>
                                <div className="preorder-progress stat-bar mb-2">
                                    <span className="stat-bar-rating" role="stat-bar" style={{width: "30%"}}>30%</span>
                                </div>
                                <p className="mb-2 dgrey-clr">Delivery Date: July 23rd 2021</p>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">Book
                                        Now</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Pre-order3.png" alt="Product-img3 " />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Strawberries</h5>
                                </a>
                                <a href="#" className="red-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>9% | In Season</a>
                                <h6 className="mb-2 mt-2
                                    font-weight-bold simhead">₦7,500 per kg</h6>
                                <p className="text-red mb-2 text-uppercase">Closed</p>
                                <div className="preorder-progress stat-bar mb-2">
                                    <span className="stat-bar-rating" role="stat-bar" style={{width: "100%"}}>100%</span>
                                </div>
                                <p className="mb-2 dgrey-clr">Delivery Date: July 23rd 2021</p>
                                <a href="#" className="closed-opacity">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">Book
                                        Now</button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopTab