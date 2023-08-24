import Theme from "@/styles/themes";
import { GlobalButton } from "../Button";
import { CitySelector } from "../CitySelector";
import {
  ButtonGroup,
  Container,
  Footer,
  Icon,
  Logo,
  Moon,
  Top,
  XLogo,
  XTop,
} from "./styles";
import { useRouter } from "next/router";
import { Back } from "../Back";
import { useState, useEffect } from "react";

interface HeaderProps {
  page?: string;
  selected?: string;
}

export function Header({ page = "other", selected }: HeaderProps) {
  const [width, setWidth] = useState(100);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const router = useRouter();
  return (
    <Container>
      {page === "main" ? (
        <>
          <Top>
            <Logo
              src="/Global/logoHorizontal.svg"
              width={200}
              height={50}
              alt="Logo"
              onClick={() => router.push("/")}
            />
            <CitySelector />
            <ButtonGroup direction="horizontal" gap={2}>
              <GlobalButton
                content="Entrar"
                background={`${Theme.color.primary_80}`}
                color={`${Theme.color.gray_10}`}
                width="auto"
                fontSize={12}
                onClick={() => router.push("/login")}
              />
              <GlobalButton
                content="Se Cadastrar"
                background={`${Theme.color.primary_80}`}
                color={`${Theme.color.gray_10}`}
                width="auto"
                fontSize={12}
              />
            </ButtonGroup>
          </Top>
          <Footer>
            <Icon
              src="/Global/Icons/HomeIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/")}
              style={{ opacity: selected === "home" ? 1 : 0.5 }}
            />
            <Icon
              src="/Global/Icons/BagIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/shop")}
              style={{ opacity: selected === "shop" ? 1 : 0.5 }}
            />
            <Moon
              src="/Global/Icons/MoonIcon.svg"
              width={65}
              height={65}
              alt=""
              onClick={() => router.push("/mymatches")}
              style={{ opacity: selected === "match" ? 1 : 0.5 }}
            />
            <Icon
              src="/Global/Icons/TicketIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/purchased")}
              style={{ opacity: selected === "purchased" ? 1 : 0.5 }}
            />
            <Icon
              src="/Global/Icons/ProfileIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/profile")}
              style={{ opacity: selected === "profile" ? 1 : 0.5 }}
            />
          </Footer>
        </>
      ) : page === "secondary" ? (
        <>
          {width < 768 ? <></> : <Back />}
          <Footer>
            <Icon
              src="/Global/Icons/HomeIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/")}
              style={{ opacity: selected === "home" ? 1 : 0.5 }}
            />
            <Icon
              src="/Global/Icons/BagIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/shop")}
              style={{ opacity: selected === "shop" ? 1 : 0.5 }}
            />
            <Moon
              src="/Global/Icons/MoonIcon.svg"
              width={65}
              height={65}
              alt=""
              onClick={() => router.push("/mymatches")}
              style={{ opacity: selected === "match" ? 1 : 0.5 }}
            />
            <Icon
              src="/Global/Icons/TicketIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/purchased")}
              style={{ opacity: selected === "purchased" ? 1 : 0.5 }}
            />
            <Icon
              src="/Global/Icons/ProfileIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/profile")}
              style={{ opacity: selected === "profile" ? 1 : 0.5 }}
            />
          </Footer>
        </>
      ) : (
        <>
          <XTop>
            <Back />
            <XLogo
              src="/Global/logoHorizontal.svg"
              width={1000}
              height={300}
              alt=""
            />
          </XTop>
        </>
      )}
    </Container>
  );
}
