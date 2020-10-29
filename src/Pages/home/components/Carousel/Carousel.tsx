import React from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container')


var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

const Carousel = () => {
    return (
        <div className="swiper-container">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
                {/* Slides */}
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>

            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination" />
            {/* If we need navigation buttons */}
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
            {/* If we need scrollbar */}
            <div className="swiper-scrollbar" />
        </div>
    );
}

export default Carousel;
