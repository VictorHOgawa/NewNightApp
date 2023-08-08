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

interface HeaderProps {
  page?: string;
}

export function Header({ page = "secondary" }: HeaderProps) {
  const router = useRouter();
  return (
    <Container>
      {page === "main" ? (
        <>
          <Top>
            <Logo
              src="/Global/FullLogo.svg"
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
            />
            <Icon
              src="/Global/Icons/BagIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/shop")}
            />
            <Moon
              src="/Global/Icons/MoonIcon.svg"
              width={65}
              height={65}
              alt=""
              onClick={() => router.push("/match")}
            />
            <Icon
              src="/Global/Icons/TicketIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/purchased")}
            />
            <Icon
              src="/Global/Icons/ProfileIcon.svg"
              width={35}
              height={35}
              alt=""
              onClick={() => router.push("/profile")}
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
