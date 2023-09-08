import { GlobalButton } from "@/components/Global/Button";
import { GlobalTitle } from "@/components/Global/Title";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Installments } from "./Installments";
import { NewCard } from "./NewCard";
import { Container, Form, Icon } from "./styles";
export function CardMethod() {
  const [selected, setSelected] = useState("");
  const [newCard, setNewCard] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [installments, setInstallments] = useState(false);
  const [width, setWidth] = useState(100);
  const router = useRouter();

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    userName: "",
    cpfCnpj: "",
    CEP: "",
    Number: "",
  });

  function handleBack() {
    if (installments && !newCard && !stepTwo) {
      return setInstallments(false);
    }
    if (newCard && !stepTwo) {
      return setNewCard(false);
    }
    if (stepTwo && !installments) {
      return setStepTwo(false);
    }
    if (stepTwo && installments) {
      setNewCard(true);
      setInstallments(false);
    }
  }
  function handleNext() {
    if (selected === "") {
      return alert("Selecione um Cartão");
    }
    if (selected !== "selected3") {
      return setInstallments(true);
    }
    if (selected === "selected3" && !newCard && !installments) {
      return setNewCard(true);
    }
    if (
      selected === "selected3" &&
      newCard === true &&
      !stepTwo &&
      formData.cardName !== "" &&
      formData.cardNumber !== "" &&
      formData.expirationDate !== "" &&
      formData.cvc !== ""
    ) {
      return setStepTwo(true);
    }
    if (
      selected === "selected3" &&
      stepTwo &&
      !installments &&
      newCard === true &&
      formData.cardName !== "" &&
      formData.cardNumber !== "" &&
      formData.expirationDate !== "" &&
      formData.cvc !== "" &&
      formData.userName !== "" &&
      formData.cpfCnpj !== "" &&
      formData.CEP !== "" &&
      formData.Number !== ""
    ) {
      {
        setInstallments(true);
        setNewCard(false);
      }
    }
    if (!newCard && installments) {
      return router.push("/purchased");
    }
  }

  return (
    <Container>
      {newCard ? (
        <>
          <NewCard
            formData={formData}
            setFormData={setFormData}
            stepTwo={stepTwo}
          />
        </>
      ) : installments ? (
        <Installments formData={formData} />
      ) : (
        <>
          <Stack>
            <GlobalButton
              background={`${Theme.color.secondary_80}`}
              color={`${Theme.color.gray_10}`}
              width={width < 768 ? "75%" : "auto"}
              height="auto"
              content=""
              style={{
                alignSelf: "center",
                marginTop: width < 768 ? "5%" : "2%",
                display: "flex",
                justifyContent: "space-evenly",
                padding: 10,
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="selected3"
                name="cards"
                value="selected3"
                onChange={() => setSelected("selected3")}
              />

              <label htmlFor="selected3">
                <Icon src="/Checkout/Add.svg" width={20} height={20} alt="" />
                {""} Inserir dados de um Cartão
              </label>
            </GlobalButton>
          </Stack>
          <GlobalTitle
            title="Código da Galera"
            fontSize={15}
            marginTop={width < 768 ? "10%" : "5%"}
            marginLeft={width < 768 ? "5%" : "35%"}
          />
          <Form
            placeholder="Insira o Melhor Código aqui"
            style={{ width: width < 768 ? "90%" : "30%", alignSelf: "center" }}
          />
        </>
      )}
      <br />
      <Stack
        direction="horizontal"
        gap={3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GlobalButton
          content="Voltar"
          background={`${Theme.color.secondary_60}`}
          color={`${Theme.color.gray_10}`}
          width={width < 768 ? "45%" : "auto"}
          height="auto"
          fontSize={18}
          disabled={newCard || installments ? false : true}
          onClick={() => handleBack()}
        />
        <GlobalButton
          content={
            installments
              ? "Finalizar"
              : selected === "selected3"
              ? "Continuar"
              : "Pagamento"
          }
          background={`${Theme.color.next}`}
          color={`${Theme.color.gray_10}`}
          width={width < 768 ? "45%" : "auto"}
          height="auto"
          fontSize={18}
          onClick={() => handleNext()}
        />
      </Stack>
    </Container>
  );
}
