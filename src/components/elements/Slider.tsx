import React from "react";
import { Swiper } from "swiper/react";
import { SwiperEvents, SwiperOptions } from "swiper/types";

interface SwiperProps extends SwiperOptions {
  children: React.ReactNode;
}
const Slider = (props: SwiperProps) => {
  return <Swiper {...props}>{props.children}</Swiper>;
};

export default Slider;
