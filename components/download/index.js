import React from 'react'

const Download = () => {
  return (
    <div>
        <section className="download-wrapper  ml-2 mr-2 d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="download-content">
                            <h3>Download the New Pricepally Mobile App </h3>
                            <ul className="list-unstyled">
                                <li className="d-inline-block">
                                    <a href="#">
                                        <img src="/images/appstore.png" alt="appstore" />
                                    </a>
                                </li>
                                <li className="d-inline-block">
                                    <a href="#">
                                        <img src="/images/playstore.png" alt="appstore" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="download-img">
                            <img src="/images/download_mobile.png" alt="download-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* download bottom */}
        <section className="download-bottom-bg  ml-2 mr-2 d-none d-lg-block">
            <div className="container">
                <div className="row m-auto">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-3 mt-2">
                                <embed src="/images/dedicated-icon.svg" width="60px" height="60px" />
                            </div>
                            <div className="col-lg-9">
                                <h4>Dedicated Service</h4>
                                <p>We are committed to serve you the best products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-3 mt-2">
                                <embed src="/images/return_icon.svg" width="60px" height="60px" />
                            </div>
                            <div className="col-lg-9">
                                <h4>Free Return</h4>
                                <p>We stand behind what we serve you</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-3 mt-2">
                                <embed src="/images/online-icon.png" width="60px" height="60px" />
                            </div>
                            <div className="col-lg-9">
                                <h4>Online 24/7</h4>
                                <p>Call +2347045000137</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Download