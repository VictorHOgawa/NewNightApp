import { AdImage, Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Ad({ ...rest }: any) {
  const Ads = [
    {
      location: "/Global/Ads/Ad1.svg",
    },
    {
      location: "/Global/Ads/Ad1.svg",
    },
    {
      location: "/Global/Ads/Ad1.svg",
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
