import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import Swipercore, {Navigation} from 'swiper'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss';
import './styles.css'
import food from '../../../../../_shared/assets/img/food.png'
import { Typography } from "@material-ui/core";
Swipercore.use([Navigation])

export const ItemsCarousel = () => {
   const slides = Array(5).fill(0)
    return(
       <div className="container">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        id="items-carousel"
        
        autoplay
        loop
        >
           {
            slides.map((slide:any, index) => {
               return(
               <SwiperSlide id="item-carousel-slide" key={index}>
               <div className="center">
                  <img src={food} alt=""/>
                  <Typography>Jollof</Typography>
                  </div>
            </SwiperSlide>
               )
            })
           }
      
        </Swiper>
        </div>
    )
}
