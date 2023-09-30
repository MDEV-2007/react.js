import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './style/carusel.css'


export default function Carusel() {
    return (
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><img src="https://iustaging.iu.edu.sa/media/IU-Temp-Images/IUGATE.jpg?rmode=min&quality=60&format=jpg&token=lLR0Qxt2yOck9AiDFgkjFwXj0503rRafmKGe72nxmUo%3D" alt="" /><div className="text">Islamic University of Medinah <br /> Study here</div></SwiperSlide>
          <SwiperSlide><img src="https://leisureopportunities.co.uk/images/HIGH25534_486305.jpg" alt="" /><div className="text">Umm Al-Qura University <br /> Study here</div></SwiperSlide>
          <SwiperSlide><img src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/06/05/3268641-1846082204.jpeg?itok=P5xbkOqa" alt="" /><div className="text">Imam Muhammad ibn Saud Islamic University <br /> Study here</div></SwiperSlide>
          <SwiperSlide><img src="https://www.emdaddesign.com/images/projects/large/imam-mohammad-bin-saud-islamic-university/2.jpg" alt="" /><div className="text">King Abdulaziz University <br /> Study here</div></SwiperSlide>
        </Swiper>
      </>
    );
  }
  