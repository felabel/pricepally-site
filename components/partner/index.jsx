import React from 'react'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
    autoplay:true,
    margin:60,
    loop:true,
    nav: false,
    dots: false,

    responsive:{
        0:{
            items:1,
        },
        999:{
            items:2,
        },
        1000:{
            items:5
        }
    }
}
const Partner = () => {
  return (
    <div>
        <section className="media-wrapper  ml-2 mr-2 d-none d-lg-block">
            <div className="container">
                <div id="media-bg" className="followers-bg mb-5">
                    <h4 className="text-center mb-4">Partners & Media</h4>
                    <OwlCarousel className="owl-theme" id="media_partner"  {...options}>
                        <div className="item">
                            <a href="#">  <img className="media-img" src="/images/media-img1.png" alt="media-img1" /> </a>
                        </div>
                        <div className="item">
                            <a href="#"> <img className="media-img" src="/images/media-img2.png" alt="media-img1" /> </a>
                        </div>

                        <div className="item">
                            <a href="#"> <img className="media-img" src="/images/media-img3.png" alt="media-img1" /> </a>
                            </div>
                            <div className="item">
                                <a href="#">  <img className="media-img" src="/images/media-img1.png" alt="media-img1" /> </a>
                        </div>

                        <div className="item">
                            <a href="#"> <img className="media-img" src="/images/media-img2.png" alt="media-img1" /> </a>
                        </div>

                        <div className="item">
                            <a href="#"> <img className="media-img" src="/images/media-img3.png" alt="media-img1" /> </a>
                        </div>
                    </OwlCarousel>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Partner