import { Stack } from "react-bootstrap";
import { Button, Icons } from "./styles";

interface ButtonsProps {
  maps: string;
  instagram: string;
  whatsapp: string;
}

export function Buttons({ maps, instagram, whatsapp }: ButtonsProps) {
  return (
    <Stack direction="horizontal" gap={2} style={{ alignSelf: "center" }}>
      <a href={maps} target="blank" rel="noreferrer">
        <Button tipo="geo">
          Localização{" "}
          <Icons src="/Global/Icons/Maps.svg" width={20} height={20} alt="" />
        </Button>
      </a>
      <a href={instagram} target="blank" rel="noreferrer">
        <Button tipo="instagram">
          Instagram {""}
          <Icons
            src="/Global/Icons/Instagram.svg"
            width={20}
            height={20}
            alt=""
          />
        </Button>
      </a>
      <a href={whatsapp} target="blank" rel="noreferrer">
        <Button tipo="whatsapp">
          WhatsApp {""}
          <Icons
            src="/Global/Icons/Whatsapp.svg"
            width={20}
            height={20}
            alt=""
          />
        </Button>
      </a>
    </Stack>
  );
}
