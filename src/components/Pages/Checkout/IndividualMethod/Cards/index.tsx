import { GlobalButton } from "@/components/Global/Button";
import { GlobalTitle } from "@/components/Global/Title";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner, Stack } from "react-bootstrap";
import { Installments } from "./Installments";
import { NewCard } from "./NewCard";
import { Container, Form, Icon } from "./styles";
import { AuthPostAPI, authGetAPI } from "@/lib/axios";
import { useCart } from "@/context/cart";

interface CardProps {
  coupon: string;
  setCoupon: any;
  AddCoupon: any;
  loadingCoupon: boolean;
}
export function CardMethod({
  coupon,
  setCoupon,
  AddCoupon,
  loadingCoupon,
}: CardProps) {
  const router = useRouter();
  const { cart, setCart } = useCart();
  const [selected, setSelected] = useState("");
  const [newCard, setNewCard] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [installments, setInstallments] = useState(false);
  const [width, setWidth] = useState(100);
  const [loading, setLoading] = useState(false);
  const [loadingCards, setLoadingCards] = useState(false);
  const [cards, setCards] = useState<any>([]);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    userName: "",
    email: "",
    mobilePhone: "",
    cpfCnpj: "",
    CEP: "",
    Number: "",
  });
  const [creditCard, setCreditCard] = useState<any>({
    holderName: "",
    number: "",
    expiryMonth: "",
    expiryYear: "",
    ccv: "",
  });
  const [creditCardHolderInfo, setCreditCardHolderInfo] = useState<any>({
    name: "",
    email: "",
    mobilePhone: "",
    cpfCnpj: "",
    postalCode: "",
    addressNumber: "",
  });
  const [installmentCount, setInstallmentCount] = useState(1);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function sendNewCard() {
    setLoading(true);
    const connect = await AuthPostAPI("/purchase/credit", {
      ...cart,
      creditCard,
      creditCardHolderInfo,
      installmentCount,
      coupon: "",
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    router.push("/purchased");
    return setLoading(false);
  }

  async function sendExistingCard() {
    setLoading(true);
    const connect = await AuthPostAPI(`/purchase/credit/${selected}`, {
      ...cart,
      coupon: "",
      installmentCount,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    router.push("/purchased");
    return setLoading(false);
  }

  async function getCards() {
    setLoadingCards(true);
    const connect = await authGetAPI("/user/credit-card");
    if (connect.status !== 200) {
      return;
    }
    setCards(connect.body.creditCard);
    return setLoadingCards(false);
  }

  useEffect(() => {
    getCards();
  }, []);

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
    if (selected !== "selected3" && !installments) {
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
      formData.email !== "" &&
      formData.mobilePhone !== "" &&
      formData.cpfCnpj !== "" &&
      formData.CEP !== "" &&
      formData.Number !== ""
    ) {
      {
        setInstallments(true);
        setNewCard(false);
      }
    }
    if (!newCard && installments && selected !== "selected3") {
      sendExistingCard();
    }
    if (!newCard && installments && selected === "selected3") {
      setCreditCard({
        holderName: formData.cardName,
        number: formData.cardNumber,
        expiryMonth: formData.expirationDate.split("/")[0],
        expiryYear: formData.expirationDate.split("/")[1],
        ccv: formData.cvc,
      });
      setCreditCardHolderInfo({
        name: formData.userName,
        email: formData.email,
        mobilePhone: formData.mobilePhone,
        cpfCnpj: formData.cpfCnpj,
        postalCode: formData.CEP,
        addressNumber: formData.Number,
      });
      sendNewCard();
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
        <Installments
          formData={formData}
          installmentCount={installmentCount}
          setInstallmentCount={setInstallmentCount}
          selected={selected}
        />
      ) : (
        <>
          <Stack>
            {!cards ? (
              <></>
            ) : (
              <>
                {loadingCards ? (
                  <Spinner
                    animation="border"
                    variant="primary"
                    style={{ alignSelf: "center" }}
                  />
                ) : (
                  <>
                    {cards.map((item: any) => (
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
                          id={item.id}
                          name="cards"
                          value={item.id}
                          onChange={() => setSelected(item.id)}
                        />
                        <label htmlFor={item.id} style={{ fontSize: 15 }}>
                          {item.creditCardBrand} **** {item.creditCardNumber}
                        </label>
                      </GlobalButton>
                    ))}
                  </>
                )}
              </>
            )}
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
            marginTop={width < 768 ? "10%" : "2%"}
            marginLeft={width < 768 ? "5%" : "35%"}
          />
          <Stack
            direction="horizontal"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form
              placeholder="Insira o Melhor Código aqui"
              style={{
                width: "45%",
                height: "auto",
                fontSize: 12,
                marginLeft: width < 768 ? "5%" : "15%",
              }}
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <GlobalButton
              content="Aplicar Cupom"
              background={Theme.color.confirmation}
              color={Theme.color.background}
              width="auto"
              height="auto"
              fontSize={12}
              onClick={AddCoupon}
              loading={loadingCoupon}
              style={{
                marginRight: width < 768 ? "5%" : "15%",
              }}
            />
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
          onClick={handleNext}
          loading={loading}
        />
      </Stack>
    </Container>
  );
}
