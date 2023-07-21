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
} from "./styles";

export function Header() {
  return (
    <Container>
      <Top>
        <Logo src="/Global/FullLogo.svg" width={200} height={50} alt="Logo" />
        <CitySelector style={{ alignSelf: "center" }} />
        <ButtonGroup direction="horizontal" gap={2}>
          <GlobalButton
            content="Entrar"
            background={`${Theme.color.primary_80}`}
            color={`${Theme.color.gray_10}`}
            width="auto"
          />
          <GlobalButton
            content="Se Cadastrar"
            background={`${Theme.color.primary_80}`}
            color={`${Theme.color.gray_10}`}
            width="auto"
          />
        </ButtonGroup>
      </Top>
      <Footer>
        <Icon src="/Global/Icons/HomeIcon.svg" width={35} height={35} alt="" />
        <Icon src="/Global/Icons/BagIcon.svg" width={35} height={35} alt="" />
        <Moon src="/Global/Icons/MoonIcon.svg" width={65} height={65} alt="" />
        <Icon
          src="/Global/Icons/TicketIcon.svg"
          width={35}
          height={35}
          alt=""
        />
        <Icon
          src="/Global/Icons/ProfileIcon.svg"
          width={35}
          height={35}
          alt=""
        />
      </Footer>
    </Container>
  );
}
