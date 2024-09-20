import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Carousel = () => {
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#22c55e",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as React.CSSProperties
        }
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-screen w-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5699522/pexels-photo-5699522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md flex flex-col items-center justify-center">
              <h1 className=" text-center  text-5xl font-bold text-green-600">
                Empowering Healthcare Providers
              </h1>
              <p className="text-center text-green-400 text-3xl">
                Quality medicines at unbeatable prices.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md flex flex-col items-center justify-center">
              <h1 className="text-center  text-5xl font-bold text-green-600">
                Empowering Healthcare Providers
              </h1>
              <p className="text-center text-green-400 text-3xl ">
                Quality medicines at unbeatable prices.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5699522/pexels-photo-5699522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md flex flex-col items-center justify-center">
              <h1 className="text-center  text-5xl font-bold text-green-600">
                Empowering Healthcare Providers
              </h1>
              <p className="text-center text-green-400 text-3xl">
                Quality medicines at unbeatable prices.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
