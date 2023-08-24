import { GlobalTitle } from "@/components/Global/Title";
import {
  Container,
  Icon,
  Person,
  PersonContainer,
  SliderContainer,
  TitleContainer,
} from "./styles";
import Theme from "@/styles/themes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Crew() {
  const people = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container>
      <TitleContainer>
        <GlobalTitle
          title="Galera da Night"
          background={`${Theme.color.secondary_40}`}
        />
        <Icon src="/Global/Icons/infoIcon.svg" width={20} height={20} alt="" />
      </TitleContainer>
      <SliderContainer>
        <Swiper slidesPerView={5}>
          {people.map((item) => (
            <SwiperSlide>
              <PersonContainer>
                <Person
                  width={50}
                  height={50}
                  alt=""
                  src={"/MyMatches/Person.svg"}
                />
              </PersonContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Container>
  );
}
