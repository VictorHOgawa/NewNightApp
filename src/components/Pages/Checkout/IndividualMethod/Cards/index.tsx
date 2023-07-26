import { Stack } from "react-bootstrap";
import { Container, Icon } from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { useState } from "react";
import { NewCard } from "./NewCard";
import { Installments } from "./Installments";
export function CardMethod() {
  const [selected, setSelected] = useState("");
  const [newCard, setNewCard] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [installments, setInstallments] = useState(false);
  const [stepThree, setStepThree] = useState(false);

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

  function handleBack() {}
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
      return setInstallments(true);
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

  console.log("selected:", selected);
  console.log("newCard:", newCard);
  console.log("installments:", installments);
  console.log("stepTwo:", stepTwo);
  console.log("formData:", formData);
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
        <Installments />
      ) : (
        <>
          <Stack>
            <GlobalButton
              background={`${Theme.color.secondary_80}`}
              color={`${Theme.color.gray_10}`}
              width="75%"
              height="auto"
              content=""
              style={{
                alignSelf: "center",
                marginTop: "5%",
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
              <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
              <label htmlFor="selected1">XXXX XXXX XXXX 1234</label>
            </GlobalButton>
            <GlobalButton
              background={`${Theme.color.secondary_80}`}
              color={`${Theme.color.gray_10}`}
              width="75%"
              height="auto"
              content=""
              style={{
                alignSelf: "center",
                marginTop: "5%",
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
              <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
              <label htmlFor="selected2">XXXX XXXX XXXX 1234</label>
            </GlobalButton>
            <GlobalButton
              background={`${Theme.color.secondary_80}`}
              color={`${Theme.color.gray_10}`}
              width="75%"
              height="auto"
              content=""
              style={{
                alignSelf: "center",
                marginTop: "5%",
                display: "flex",
                justifyContent: "space-evenly",
                padding: 10,
              }}
            >
              <input
                type="radio"
                id="selected3"
                name="cards"
                value="selected3"
                onChange={() => setSelected("selected3")}
              />
              <Icon src="/Checkout/Add.svg" width={20} height={20} alt="" />
              <label htmlFor="selected3">Pagar com Outro Cartão</label>
            </GlobalButton>
          </Stack>
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
          width="auto"
          disabled={newCard || installments ? false : true}
          onClick={
            newCard === true
              ? () => setNewCard(false)
              : installments === true
              ? () => setInstallments(false)
              : () => null
          }
        />
        <GlobalButton
          content={installments ? "Finalizar" : "Próximo"}
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.gray_10}`}
          width="auto"
          onClick={() => handleNext()}
        />
      </Stack>
    </Container>
  );
}
