import { Stack } from "react-bootstrap";
import { Container, Forgot, Form, Label, Logo } from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { maskCpfCnpj, minLength } from "@/utils/masks";
import { useState } from "react";
import { Error } from "@/components/Global/error";

export function LoginContainer() {
  const [loginData, setLoginData] = useState({
    cpfCnpj: "",
    password: "",
  });
  const [error, setError] = useState<any>({});
  console.log("loginData:", loginData);
  const handleValidations = (type: any, value: any) => {
    let errorText;
    switch (type) {
      case "cpfCnpj":
        errorText = value === "" ? "Campo Obrigatório" : minLength(11)(value);
        setError({ ...error, cpfCnpjError: errorText });
        break;
    }
  };
  const handleBlur = (e: any) => {
    handleValidations(e.target.name, e.target.value);
  };
  return (
    <Container>
      <Label>CPF</Label>
      <Form
        name="cpfCnpj"
        placeholder="Número Aqui..."
        onChange={(e) =>
          setLoginData({
            ...loginData,
            cpfCnpj: maskCpfCnpj(e.target.value),
          })
        }
        value={loginData.cpfCnpj}
        required
        onBlur={handleBlur}
        maxLength={14}
      />
      {error && error.cpfCnpjError && error.cpfCnpjError.length > 1 && (
        <Error>{error.cpfCnpjError}</Error>
      )}
      <br />
      <Label>SENHA</Label>
      <Form
        name="password"
        placeholder="Senha"
        type="password"
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        value={loginData.password}
        required
      />
      <Forgot>Esqueci a Senha.</Forgot>
      <Stack
        gap={2}
        style={{
          alignSelf: "center",
          display: "flex",
          width: "50%",
        }}
      >
        <GlobalButton
          content="Entrar"
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.gray_100}`}
          width="100%"
          height="auto"
        />
        <GlobalButton
          content="Cadastro"
          background={`${Theme.color.primary_60}`}
          color={`${Theme.color.gray_100}`}
          width="100%"
          height="auto"
          disabled
        />
      </Stack>
    </Container>
  );
}
