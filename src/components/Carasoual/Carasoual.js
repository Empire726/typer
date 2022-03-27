import React, { Component } from "react";
import Slider from "react-slick";
import "./cara.css"

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 1500,
            cssEase: "linear"
        };
        return (
            <div className="carasoual" id='cara'>
                
                <Slider {...settings}>
                    <div className="images"> 
                        <img src="../../assests/images/new1.jpg"/>
                    </div>
                    <div className="images">
                        <img src="../../assests/images/new2.jpg" />
                    </div>
                    <div className="images">
                        <img src="../../assests/images/new3.jpg" />
                    </div>
                    <div className="images">
                        <img src="../../assests/images/new4.jpg" />
                    </div>
                    <div className="images">
                        <img src="../../assests/images/new1.jpg" />
                    </div>
                    <div className="images">
                        <img src="../../assests/images/new3.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}