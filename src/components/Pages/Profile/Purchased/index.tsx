import { GlobalTitle } from "@/components/Global/Title";
import { Button, ButtonImg, Container } from "./styles";
import { Stack } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function Purchased() {
  const router = useRouter();
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
      <GlobalTitle title="Suas Compras Digitais" />
      <br />
      <Stack
        direction="horizontal"
        style={{
          display: "flex",
          justifyContent: width < 768 ? "space-between" : "space-evenly",
        }}
      >
        <Button onClick={() => router.push("/tickets")}>
          <ButtonImg
            src="/Purchased/Tickets.svg"
            width={200}
            height={200}
            alt=""
          />
        </Button>
        <Button onClick={() => router.push("/products")}>
          <ButtonImg
            src="/Purchased/Products.svg"
            width={200}
            height={200}
            alt=""
          />
        </Button>
      </Stack>
    </Container>
  );
}
