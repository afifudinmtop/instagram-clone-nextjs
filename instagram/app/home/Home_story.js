import { Swiper, SwiperSlide } from "swiper/react";
import Home_story_component from "./Home_story_component";
import "swiper/css";

const Home_story = () => {
  return (
    <Swiper
      className="flex ms-[11px] mt-[17px]"
      slidesPerView={"auto"}
      loop={false}
      spaceBetween={10}
    >
      <SwiperSlide className="w-[auto!important]">
        <div className="w-[73px] h-[73px] flex">
          <img
            src={"/uploads/1.png"}
            className="w-[63px] h-[63px] my-auto mx-auto"
          />
          <div className="absolute translate-x-[45px] translate-y-[40px] bg-[url('/AddStory.png')] w-[30px] h-[30px] rounded-full bg-contain bg-no-repeat"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-[auto!important]">
        <Home_story_component src="2.png" />
      </SwiperSlide>

      <SwiperSlide className="w-[auto!important]">
        <Home_story_component src="3.png" />
      </SwiperSlide>

      <SwiperSlide className="w-[auto!important]">
        <Home_story_component src="4.png" />
      </SwiperSlide>

      <SwiperSlide className="w-[auto!important]">
        <Home_story_component src="5.png" />
      </SwiperSlide>

      <SwiperSlide className="w-[auto!important]">
        <Home_story_component src="6.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home_story;
