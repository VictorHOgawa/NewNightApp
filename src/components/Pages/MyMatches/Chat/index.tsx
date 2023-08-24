import { GlobalTitle } from "@/components/Global/Title";
import {
  ChatIcon,
  Chats,
  Container,
  LocationImage,
  LocationName,
  Name,
  Person,
  SliderContainer,
} from "./styles";
import Theme from "@/styles/themes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";
import { Stack } from "react-bootstrap";
import { useState } from "react";

export function Chat() {
  const router = useRouter();
  const CurrentChats = [
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: true,
    },

    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: true,
    },
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: true,
    },
  ];
  const [active, setActive] = useState(true);
  return (
    <Container>
      <GlobalTitle
        title="Chat da Galera"
        background={`${Theme.color.secondary_40}`}
      />
      {CurrentChats.map((item) => (
        <Chats>
          <Person src={"/MyMatches/Person.svg"} width={50} height={50} alt="" />
          <Stack style={{ marginLeft: "10%", justifyContent: "space-between" }}>
            <Name>Test</Name>
            <Stack direction="horizontal" style={{ alignItems: "flex-end" }}>
              <LocationImage
                src="/Events/Event1.svg"
                width={30}
                height={30}
                alt=""
              />
              <LocationName style={{ textIndent: 5 }}>
                {""} Nome do Evento
              </LocationName>
            </Stack>
          </Stack>
          {item.active ? (
            <ChatIcon
              src="/MyMatches/Chat2.svg"
              width={40}
              height={40}
              alt=""
              active={active}
              onClick={() => router.push("/chat")}
            />
          ) : (
            <ChatIcon
              src="/MyMatches/Chat1.svg"
              width={30}
              height={30}
              alt=""
              active={active}
              onClick={() => router.push("/chat")}
            />
          )}
        </Chats>
      ))}
    </Container>
  );
}
