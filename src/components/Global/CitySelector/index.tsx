import Theme from "@/styles/themes";
import {
  Button,
  Container,
  Icon,
  Item,
  ItemText,
  Menu,
  Toggle,
} from "./styles";
import { useState } from "react";

export function CitySelector({ ...rest }: any) {
  const Cities = [
    "Sinop - MT",
    "Anchieta - SC",
    "Santo Antônio do Sudoeste - PR",
    "Jundiaí - SP",
    "Curitiba - PR",
    "Maringá - PR",
  ];

  const [selected, setSelected] = useState("Qualquer Lugar");
  return (
    <>
      <Container {...rest}>
        <Button>
          <Toggle
            variant="background"
            style={{ color: `${Theme.color.gray_10}` }}
          >
            <Icon />
            {selected === "Qualquer Lugar" ? "Qualquer Lugar" : selected}
            {/* Qualquer Lugar */}
          </Toggle>
          <Menu>
            <ItemText>Escolha sua Cidade</ItemText>
            {Cities.map((item) => (
              <Item onClick={() => setSelected(item)} key={item}>
                {item}
              </Item>
            ))}
          </Menu>
        </Button>
      </Container>
    </>
  );
}
