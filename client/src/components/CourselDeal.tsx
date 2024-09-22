import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import ProductCard from "../pages/product/ProductCard";
import { products } from "../data/data";

export const CourselDeal: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-12">Deals of the day</h1>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          margin: "20px",
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".custom-pagination", 
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              name={product.name}
              price={product.price}
              availability={product.availability}
              imageUrl={product.imageUrl}
              description={product.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination" /> {/* Custom pagination container */}
    </>
  );
};
