import { GlobalTitle } from "@/components/Global/Title";
import { getAPI } from "@/lib/axios";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";
import { Container } from "./styles";

export function EventSlider() {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const [events, setEvents] = useState<any[]>([]);

  async function getEvents() {
    const connect = await getAPI("/event");
    if (connect.status === 200) {
      setEvents(connect.body.events);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getEvents();
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
                {events.map((item) => (
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
