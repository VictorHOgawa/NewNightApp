import { GlobalTitle } from "@/components/Global/Title";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";
import { Container } from "./styles";

interface PlacesProps {
  places: any;
  loading1: boolean;
}

export function PlaceSlider({ places, loading1 }: PlacesProps) {
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
      <GlobalTitle title="Lugares para Curtir" />
      {loading1 ? (
        <></>
      ) : (
        <>
          <br />
          {places.length !== 0 ? (
            <Swiper
              slidesPerView={
                width < 768 ? 2 : width >= 768 && width < 1024 ? 4 : 6
              }
              // spaceBetween={1}
            >
              {places.map((item: any) => (
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
          ) : (
            <label style={{ color: Theme.color.gray_10, alignSelf: "center" }}>
              Nenhum Lugar Encontrado
            </label>
          )}
        </>
      )}
    </Container>
  );
}
