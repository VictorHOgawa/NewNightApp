import { GlobalTitle } from "@/components/Global/Title";
import { getAPI } from "@/lib/axios";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";
import { Container } from "./styles";

export function PlaceSlider() {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState<any[]>([]);
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function getEvents() {
    const connect = await getAPI("/places");
    console.log("connect places: ", connect.body.places);
    if (connect.status === 200) {
      setPlaces(connect.body.places);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container>
      <GlobalTitle title="Lugares para Curtir" />
      {loading ? (
        <></>
      ) : (
        <>
          <br />
          <Swiper
            slidesPerView={
              width < 768 ? 2 : width >= 768 && width < 1024 ? 4 : 6
            }
            spaceBetween={1}
          >
            {places.map((item) => (
              <SwiperSlide>
                <Card
                  photo={item.photo[0].photo_location}
                  name={item.name}
                  city={item.city}
                  id={item.id}
                  openTime={item.openTime}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </Container>
  );
}
