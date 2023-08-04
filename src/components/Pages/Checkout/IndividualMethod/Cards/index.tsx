import { Stack } from "react-bootstrap";
import { Container, Form, Icon } from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { useState, useEffect } from "react";
import { NewCard } from "./NewCard";
import { Installments } from "./Installments";
import { GlobalTitle } from "@/components/Global/Title";
export function CardMethod() {
  const [selected, setSelected] = useState("");
  const [newCard, setNewCard] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [installments, setInstallments] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [width, setWidth] = useState(100);

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
      return setNewCard(true);
    }
  }
  function handleNext() {
    if (selected === "") {
      return alert("Selecione um Cartão");
    }
    if (selected === "selected1" || selected === "selected2") {
      return setInstallments(true);
    }
    if (selected === "selected3" && !newCard) {
      return setNewCard(true);
    }
    if (
      selected === "selected3" &&
      !stepTwo &&
      newCard === true &&
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
    if (
      selected === "selected3" &&
      stepTwo &&
      newCard === true &&
      formData.cardName !== "" &&
      formData.cardNumber !== "" &&
      formData.expirationDate !== "" &&
      formData.cvc !== "" &&
      formData.userName !== "" &&
      formData.cpfCnpj !== "" &&
      formData.CEP !== "" &&
      formData.Number !== "" &&
      installments === true
    ) {
      return setNewCard(false);
    }
    if (!newCard && installments) {
      return console.log("done");
    }
  }

  // console.log("selected:", selected);
  console.log(
    "newCard, stepTwo, installments:",
    newCard,
    stepTwo,
    installments
  );
  // console.log("installments:", installments);
  // console.log("stepTwo:", stepTwo);
  // console.log("formData:", formData);
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
              width={width < 768 ? "75%" : "25%"}
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
                id="selected1"
                name="cards"
                value="selected1"
                onChange={() => setSelected("selected1")}
              />

              <label htmlFor="selected1">
                <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
                {""} XXXX XXXX XXXX 1234
              </label>
            </GlobalButton>
            <GlobalButton
              background={`${Theme.color.secondary_80}`}
              color={`${Theme.color.gray_10}`}
              width={width < 768 ? "75%" : "25%"}
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
                id="selected2"
                name="cards"
                value="selected2"
                onChange={() => setSelected("selected2")}
              />

              <label htmlFor="selected2">
                <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
                {""} XXXX XXXX XXXX 1234
              </label>
            </GlobalButton>
            <GlobalButton
              background={`${Theme.color.secondary_80}`}
              color={`${Theme.color.gray_10}`}
              width={width < 768 ? "75%" : "25%"}
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
            marginTop={width < 768 ? "10%" : "2%"}
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
          width={width < 768 ? "45%" : "20%"}
          height="auto"
          fontSize={18}
          disabled={newCard || installments ? false : true}
          onClick={
            () => handleBack()
            // newCard === true
            //   ? () => setNewCard(false)
            //   : installments === true
            //   ? () => setInstallments(false)
            //   : () => null
          }
        />
        <GlobalButton
          content={installments ? "Finalizar" : "Pagamento"}
          background={`${Theme.color.next}`}
          color={`${Theme.color.gray_10}`}
          width={width < 768 ? "45%" : "20%"}
          height="auto"
          fontSize={18}
          onClick={() => handleNext()}
        />
      </Stack>
    </Container>
  );
}
