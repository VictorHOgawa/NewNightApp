import { GlobalButton } from "@/components/Global/Button";
import { Error } from "@/components/Global/error";
import { PostAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import {
  maskCpfCnpj,
  maskPhone,
  minLength,
  textWithSpacesOnly,
} from "@/utils/masks";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Form, Label } from "./styles";

export function RegisterContainer() {
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    name: "",
    mobilePhone: "",
    cpfCnpj: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>({});
  const handleValidations = (type: any, value: any) => {
    let errorText;
    switch (type) {
      case "name":
        errorText =
          value === "" ? "Campo Obrigatório" : textWithSpacesOnly(value);
        setError({ ...error, nameError: errorText });
        break;

      case "mobilePhone":
        errorText = value === "" ? "Campo Obrigatório" : minLength(11)(value);
        setError({ ...error, mobilePhoneError: errorText });
        break;
      case "cpfCnpj":
        errorText = value === "" ? "Campo Obrigatório" : minLength(11)(value);
        setError({ ...error, cpfCnpjError: errorText });
        break;
      case "password":
        errorText = value === "" ? "Campo Obrigatório" : "";
        setError({ ...error, passwordError: errorText });
        break;
    }
  };
  const handleBlur = (e: any) => {
    handleValidations(e.target.name, e.target.value);
  };

  function handleSubmit() {
    setLoading(true);
    if (
      registerData.name === "" ||
      registerData.mobilePhone === "" ||
      registerData.cpfCnpj === "" ||
      registerData.password === "" ||
      registerData.confirm === "" ||
      registerData.password !== registerData.confirm
    ) {
      setLoading(false);
      return alert("Verifique todos os campos");
    } else {
      return handleRegister();
    }
  }

  async function handleRegister() {
    const connect = await PostAPI("/user/register", {
      name: registerData.name,
      cpfCnpj: registerData.cpfCnpj,
      mobilePhone: registerData.mobilePhone,
      password: registerData.password,
    });
    if (connect.status !== 200) {
      setLoading(false);
      return alert(connect.body);
    }
    localStorage.setItem("nightToken", connect.body.token);
    localStorage.setItem("nightRefreshToken", connect.body.refreshToken);
    setLoading(false);
    return router.push("/");
  }

  return (
    <Container>
      <Label>Nome</Label>
      <Form
        name="name"
        placeholder="Nome"
        onChange={(e) =>
          setRegisterData({ ...registerData, name: e.target.value })
        }
        value={registerData.name}
        required
        onBlur={handleBlur}
        autoFocus
      />
      {error && error.nameError && error.nameError.length > 1 && (
        <Error>{error.nameError}</Error>
      )}
      <Label>Telefone</Label>
      <Form
        name="mobilePhone"
        placeholder="Telefone"
        onChange={(e) =>
          setRegisterData({
            ...registerData,
            mobilePhone: maskPhone(e.target.value),
          })
        }
        value={registerData.mobilePhone}
        required
        onBlur={handleBlur}
      />
      {error && error.mobilePhoneError && error.mobilePhoneError.length > 1 && (
        <Error>{error.mobilePhoneError}</Error>
      )}
      <Label>CPF</Label>
      <Form
        name="cpfCnpj"
        placeholder="Número Aqui..."
        onChange={(e) =>
          setRegisterData({
            ...registerData,
            cpfCnpj: maskCpfCnpj(e.target.value),
          })
        }
        value={registerData.cpfCnpj}
        required
        onBlur={handleBlur}
        maxLength={14}
      />
      {error && error.cpfCnpjError && error.cpfCnpjError.length > 1 && (
        <Error>{error.cpfCnpjError}</Error>
      )}
      <Label>Senha</Label>
      <Form
        name="password"
        placeholder="Senha"
        type="password"
        onChange={(e) =>
          setRegisterData({ ...registerData, password: e.target.value })
        }
        value={registerData.password}
        required
      />
      <Label>Repita a Senha</Label>
      <Form
        name="password"
        placeholder="Senha"
        type="password"
        onChange={(e) =>
          setRegisterData({ ...registerData, confirm: e.target.value })
        }
        value={registerData.confirm}
        required
      />
      <br />
      <GlobalButton
        content="Cadastro"
        background={`${Theme.color.primary_60}`}
        color={`${Theme.color.gray_100}`}
        width="100%"
        height="auto"
        onClick={handleSubmit}
        loading={loading}
      />
    </Container>
  );
}
