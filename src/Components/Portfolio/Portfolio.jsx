import React from 'react'
import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
import './Portfolio.css'
import 'swiper/css';
import {Swiper,SwiperSlide} from 'swiper/react';
const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <span>Recent Projects</span>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='Portfolio-slider'
      >
        <SwiperSlide>
            <img src={sidebar} alt=''  />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ecommerce} alt=''  />
        </SwiperSlide>
        <SwiperSlide>
            <img src={hoc} alt=''  />
        </SwiperSlide>
        <SwiperSlide>
            <img src={musicapp} alt=''  />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
