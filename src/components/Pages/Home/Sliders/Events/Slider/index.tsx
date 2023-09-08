import { GlobalTitle } from "@/components/Global/Title";
import { getAPI } from "@/lib/axios";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";
import { Container } from "./styles";

interface EventProps {
  events: any;
  loading: boolean;
}

export function EventSlider({ events, loading }: EventProps) {
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container>
      <GlobalTitle title="Eventos e Festas" />
      {loading ? (
        <></>
      ) : (
        <>
          <br />
          {events.length !== 0 ? (
            <>
              <Swiper
                spaceBetween={
                  width < 768
                    ? -100
                    : width >= 768 && width < 1024
                    ? -425
                    : width >= 1024 && width < 1360
                    ? -650
                    : -925
                }
              >
                {events.map((item: any) => (
                  <SwiperSlide>
                    <Card
                      photo_location={item.photo_location}
                      name={item.name}
                      local={item.local}
                      date={item.date}
                      id={item.id}
                      city={item.city.name}
                      state={item.city.state}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <>test</>
          )}
        </>
      )}
    </Container>
  );
}
