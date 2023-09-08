import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AdImage, Container } from "./styles";

export function Ad({ ...rest }: any) {
  const Ads = [
    {
      location: "/Global/Ads/Ad1.png",
    },
    {
      location: "/Global/Ads/Ad2.png",
    },
    {
      location: "/Global/Ads/Ad3.png",
    },
    {
      location: "/Global/Ads/Ad4.png",
    },
    {
      location: "/Global/Ads/Ad5.png",
    },
    {
      location: "/Global/Ads/Ad6.png",
    },
  ];

  return (
    <Container {...rest}>
      <Swiper slidesPerView={1} loop={true}>
        {Ads.map((item) => (
          <SwiperSlide>
            <AdImage src={item.location} width={1000} height={400} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
