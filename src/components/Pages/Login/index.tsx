import { GlobalButton } from "@/components/Global/Button";
import { Error } from "@/components/Global/error";
import { PostAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import { maskCpfCnpj, minLength } from "@/utils/masks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Container, Forgot, Form, Label } from "./styles";

export function LoginContainer() {
  const router = useRouter();
  const query: any = router.query;
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [pageTo, setPageTo] = useState("");
  const [loginData, setLoginData] = useState({
    cpfCnpj: "",
    password: "",
  });
  const [error, setError] = useState<any>({});
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

  function handleSubmit() {
    setLoading(true);
    if (loginData.cpfCnpj === "" || loginData.password === "") {
      setLoading(false);
      return alert("Preencha todos os campos");
    } else {
      handleLogin();
    }
  }

  const handleRegister = () => {
    setLoading1(true);
    return router.push("/register");
  };

  useEffect(() => {
    if (query) {
      const { page } = query;
      setPageTo(page);
    }
  }, [query]);

  async function handleLogin() {
    const connect = await PostAPI("/user/login", loginData);
    if (connect.status !== 200) {
      setLoading(false);
      return alert(connect.body);
    }
    localStorage.setItem("nightToken", connect.body.token);
    localStorage.setItem("nightRefreshToken", connect.body.refreshToken);
    setLoading(false);
    return pageTo === "checkout" ? router.push("/checkout") : router.push("/");
  }

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
        direction="horizontal"
        style={{
          alignSelf: "center",
          display: "flex",
        }}
      >
        <GlobalButton
          content="Entrar"
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.gray_100}`}
          width="100%"
          height="auto"
          onClick={handleSubmit}
          loading={loading}
        />
        <GlobalButton
          content="Cadastro"
          background={`${Theme.color.primary_60}`}
          color={`${Theme.color.gray_100}`}
          width="100%"
          height="auto"
          onClick={handleRegister}
          loading={loading1}
        />
      </Stack>
    </Container>
  );
}
