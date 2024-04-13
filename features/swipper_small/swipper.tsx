'use client'
import style from './swipper.module.scss'
import Image from "next/image";
import watch_green_small from "@/public_img/welcome/watch_green_small.png";
import watch_quarts_small from "@/public_img/welcome/watch_quarts_small.png";
import watch_gold_small from "@/public_img/welcome/watch_gold_small.png";
import watch_black_small from "@/public_img/welcome/watch_black_small.png";
import watch_blue_small from "@/public_img/welcome/watch_blue_small.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { useSwiper } from 'swiper/react';
import { SetStateAction, useRef, useState } from "react";

const Swipper_small = () => {
  const swiper = useSwiper();
  const SwiperRef = useRef(null)
  const [slide, setSlide] = useState(0);
  const handleSlideIndex = (sw: { realIndex: SetStateAction<number>; }) => {
    setSlide(sw.realIndex);
  }
  const nextSlide = () => {
    SwiperRef.current.swiper.slideNext();
  }

  const prevSlide = () => {
    SwiperRef.current.swiper.slidePrev();
  }


  return (
    <main className={style.Main}>
      <div className={style.Main_row}>
        <Swiper className={style.Swiper}
          spaceBetween={10}
          slidesPerView={1}
          ref={SwiperRef}
          onSlideChange={handleSlideIndex}
        >
          <SwiperSlide><Image src={watch_green_small} alt={'watch_green'} width={266} height={200} /></SwiperSlide>
          <SwiperSlide><Image src={watch_quarts_small} alt={'watch_quarts'} width={266} height={200} /></SwiperSlide>
          <SwiperSlide><Image src={watch_gold_small} alt={'watch_gold'} width={266} height={200} /></SwiperSlide>
          <SwiperSlide><Image src={watch_black_small} alt={'watch_black'} width={266} height={200} /></SwiperSlide>
          <SwiperSlide><Image src={watch_blue_small} alt={'watch_blue'} width={266} height={200} /></SwiperSlide>
          <div className={style.swipper_bootom}>
            <div className={style.swipper_buttons}>
              <button onClick={() => prevSlide()}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button onClick={() => nextSlide()}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>

            <div className={style.swipper_count}>
              <p>0{slide + 1}</p>
              <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H40" stroke="white" />
              </svg>
              <p>0{5}</p>
            </div>
          </div>

        </Swiper>
      </div>



    </main>
  );
}

export default Swipper_small;

