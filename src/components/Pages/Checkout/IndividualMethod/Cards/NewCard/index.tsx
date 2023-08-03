import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";
import { Col, Stack } from "react-bootstrap";
import {
  maskCVC,
  maskCard,
  maskCep,
  maskCpfCnpj,
  maskDate,
  minLength,
  textWithSpacesOnly,
} from "@/utils/masks";
import { useState } from "react";
import { Error } from "@/components/Global/error";
import {
  stripeCardExpirValidation,
  stripeCardNumberValidation,
} from "@/utils/creditCardValidation";
import { CardContainer, CardDetails, Form, NightAppCard } from "../styles";
interface NewCardProps {
  formData: any;
  setFormData: any;
  stepTwo: any;
}

export function NewCard({ formData, setFormData, stepTwo }: NewCardProps) {
  const [error, setError] = useState<any>({});
  const handleValidations = (type: any, value: any) => {
    let errorText;
    switch (type) {
      case "cardName":
        errorText =
          value === "" ? "Campo Obrigatório" : textWithSpacesOnly(value);
        setError({ ...error, cardNameError: errorText });
        break;
      case "cardNumber":
        errorText = stripeCardNumberValidation(value);
        setError({ ...error, cardNumberError: errorText });
        break;
      case "expirationDate":
        errorText =
          value === "" ? "Campo Obrigatório" : stripeCardExpirValidation(value);
        setError({ ...error, expirationDateError: errorText });
        break;
      case "cvc":
        errorText = value === "" ? "Campo Obrigatório" : value.length < 3;
        setError({ ...error, cvcError: errorText });
        break;
      case "userName":
        errorText =
          value === "" ? "Campo Obrigatório" : textWithSpacesOnly(value);
        setError({ ...error, userNameError: errorText });
        break;
      case "cpfCnpj":
        errorText = value === "" ? "Campo Obrigatório" : minLength(11)(value);
        setError({ ...error, cpfCnpjError: errorText });
        break;
      case "CEP":
        errorText = value === "" ? "Campo Obrigatório" : minLength(8)(value);
        setError({ ...error, CEPError: errorText });
        break;
      case "Number":
        errorText = value === "" ? "Campo Obrigatório" : "";
        setError({ ...error, NumberError: errorText });
        break;
    }
  };
  const handleBlur = (e: any) => {
    handleValidations(e.target.name, e.target.value);
  };
  return (
    <Container>
      <CardContainer>
        <NightAppCard
          src="/Checkout/blankCard.svg"
          width={1000}
          height={500}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "30%",
            marginTop: "15%",
          }}
        >
          <CardDetails>
            {formData.cardName === "" ? "Nome no Cartão " : formData.cardName}
          </CardDetails>
          <CardDetails>
            {formData.cardNumber === ""
              ? "Número do Cartão"
              : formData.cardNumber}
          </CardDetails>
        </div>
      </CardContainer>
      {stepTwo ? (
        <>
          <br />
          <GlobalTitle title="Nome do Titular" fontSize={15} />
          <Form
            type="text"
            name="userName"
            placeholder="Nome Aqui..."
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            value={formData.userName}
            required
            onBlur={handleBlur}
            autoFocus
          />
          {error && error.userNameError && error.userNameError.length > 1 && (
            <Error>{error.userNameError}</Error>
          )}
          <br />
          <GlobalTitle title="CPF do Titular" fontSize={15} />
          <Form
            name="cpfCnpj"
            placeholder="Número Aqui..."
            onChange={(e) =>
              setFormData({
                ...formData,
                cpfCnpj: maskCpfCnpj(e.target.value),
              })
            }
            value={formData.cpfCnpj}
            required
            onBlur={handleBlur}
            maxLength={14}
          />
          {error && error.cpfCnpjError && error.cpfCnpjError.length > 1 && (
            <Error>{error.cpfCnpjError}</Error>
          )}
          <br />
          <GlobalTitle title="CEP de Cobrança" fontSize={15} />
          <Form
            name="CEP"
            placeholder="Número Aqui..."
            onChange={(e) =>
              setFormData({ ...formData, CEP: maskCep(e.target.value) })
            }
            value={formData.CEP}
            required
            onBlur={handleBlur}
            maxLength={9}
          />
          {error && error.CEPError && error.CEPError.length > 1 && (
            <Error>{error.CEPError}</Error>
          )}
          <br />
          <GlobalTitle title="Número da Casa" fontSize={15} />
          <Form
            type="number"
            name="Number"
            placeholder="Número Aqui"
            onChange={(e) =>
              setFormData({ ...formData, Number: e.target.value })
            }
            value={formData.Number}
            required
            onBlur={handleBlur}
          />
          {error && error.NumberError && error.NumberError.length > 1 && (
            <Error>{error.NumberError}</Error>
          )}
        </>
      ) : (
        <>
          <br />
          <GlobalTitle title="Nome no Cartão" fontSize={15} />
          <Form
            type="text"
            name="cardName"
            placeholder="Nome Aqui..."
            onChange={(e) =>
              setFormData({ ...formData, cardName: e.target.value })
            }
            value={formData.cardName}
            required
            onBlur={handleBlur}
            autoFocus
          />
          {error && error.cardNameError && error.cardNameError.length > 1 && (
            <Error>{error.cardNameError}</Error>
          )}
          <br />
          <GlobalTitle title="Número do Cartão" fontSize={15} />
          <Form
            name="cardNumber"
            placeholder="Número Aqui..."
            onChange={(e) =>
              setFormData({
                ...formData,
                cardNumber: maskCard(e.target.value),
              })
            }
            value={formData.cardNumber}
            maxLength={19}
            required
            onBlur={handleBlur}
          />
          {error &&
            error.cardNumberError &&
            error.cardNumberError.length > 1 && (
              <Error>{error.cardNumberError}</Error>
            )}
          <br />

          <Stack
            direction="horizontal"
            style={{ display: "flex", width: "100%" }}
          >
            <Col xs={6}>
              <GlobalTitle title="Expiração" fontSize={15} />
              <Form
                name="expirationDate"
                placeholder="Insira Aqui..."
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expirationDate: maskDate(e.target.value),
                  })
                }
                value={formData.expirationDate}
                maxLength={5}
                required
                onBlur={handleBlur}
              />
              {error &&
                error.expirationDateError &&
                error.expirationDateError.length > 1 && (
                  <Error>{error.expirationDateError}</Error>
                )}
            </Col>
            <Col xs={{ span: 5, offset: 1 }}>
              <GlobalTitle title="cvc" fontSize={15} />
              <Form
                name="cvc"
                placeholder="Insira Aqui..."
                onChange={(e) =>
                  setFormData({ ...formData, cvc: maskCVC(e.target.value) })
                }
                value={formData.cvc}
                maxLength={3}
                required
                onBlur={handleBlur}
              />
              {error && error.cvcError && error.cvcError.length > 1 && (
                <Error>{error.cvcError}</Error>
              )}
            </Col>
          </Stack>
        </>
      )}
    </Container>
  );
}
