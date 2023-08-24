import { GlobalTitle } from "@/components/Global/Title";
import {
  Container,
  Icon,
  Locked,
  Person,
  PersonContainer,
  SliderContainer,
  TitleContainer,
} from "./styles";
import { useState } from "react";
import Theme from "@/styles/themes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Matched() {
  const people = [1, 2, 3, 4, 5, 6, 7, 8];
  const [locked, setLocked] = useState(true);
  return (
    <Container>
      <TitleContainer>
        <GlobalTitle
          title="Quem te deu Like"
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
                  locked={locked}
                  width={50}
                  height={50}
                  alt=""
                  src={"/MyMatches/Person.svg"}
                />
                {locked ? (
                  <Locked
                    width={25}
                    height={25}
                    alt=""
                    src={"/MyMatches/Locked.svg"}
                  />
                ) : (
                  <></>
                )}
              </PersonContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Container>
  );
}
