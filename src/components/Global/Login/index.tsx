import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { GlobalButton } from "../Button";
export function LoginValidation() {
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
    <>
      {width < 768 ? (
        <>
          <Stack
            direction="horizontal"
            gap={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
              marginTop: "-5%",
            }}
          >
            <GlobalButton
              content="Entrar"
              background={`${Theme.color.primary_80}`}
              color={`${Theme.color.gray_10}`}
              width="45%"
              height="auto"
              fontSize={18}
              onClick={() => router.push("/login")}
            />
            <GlobalButton
              content="Se Cadastrar"
              background={`${Theme.color.primary_80}`}
              color={`${Theme.color.gray_10}`}
              width="45%"
              height="auto"
              fontSize={18}
              onClick={() => router.push("/register")}
            />
          </Stack>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
