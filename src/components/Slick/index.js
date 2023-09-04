import React from 'react';
import Slider from 'react-slick'; // Make sure to import the Slider component from react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VerticalSlider.css'; // Create this CSS file for custom styles

const Slick = () => {
    const settings = {
        autoplay: false, // Enables auto play of slides
        autoplaySpeed: 3000, // Auto play change interval
        arrows: false,
        dots: true,
        infinite: true,
        vertical: true, // Enable vertical sliding
        verticalSwiping: true, // Enable vertical swiping
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
    };

    return (
        <div className="vertical-slider-container">
            <Slider {...settings}>
                <div id='img1' className="slider-item"></div>

                <div id='img2' className="slider-item"></div>

                <div id='img3' className="slider-item"></div>

                <div id='img4' className="slider-item"></div>

                <div id='img5' className="slider-item"></div>
            </Slider>
        </div>
    );
};

export default Slick;
