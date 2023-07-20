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

export function CitySelector({ ...rest }: any) {
  const Cities = ["1", "2", "3", "4", "5", "6"];

  return (
    <>
      <Container {...rest}>
        <Button>
          <Toggle
            variant="background"
            style={{ color: `${Theme.color.gray_10}` }}
          >
            <Icon />
            Qualquer Lugar
          </Toggle>
          <Menu>
            <ItemText>test</ItemText>
            {Cities.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </Menu>
        </Button>
      </Container>
    </>
  );
}
