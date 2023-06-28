import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './style.scss';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper';
import getAssetUrl from '../../../../utils/getAssetUrl';

const Slider = () => (
  <Swiper
    modules={[Autoplay, Navigation, Pagination, Scrollbar]}
    className="slider"
    loop={true}
    autoplay={{ delay: 4000 }}
    autoHeight={true}
    spaceBetween={1}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={swiper => console.log(swiper)}
  >
    <SwiperSlide>
      <img className="sliderimg" src={getAssetUrl('slider1.jpg')} />
    </SwiperSlide>
    <SwiperSlide>
      <img className="sliderimg" src={getAssetUrl('slider2.png')} />{' '}
    </SwiperSlide>
    <SwiperSlide>
      <img className="sliderimg" src={getAssetUrl('slider3.jpg')} />
    </SwiperSlide>
  </Swiper>
);

export default Slider;
