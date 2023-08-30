import { GlobalButton } from "@/components/Global/Button";
import { GlobalTitle } from "@/components/Global/Title";
import { Error } from "@/components/Global/error";
import Theme from "@/styles/themes";
import { maskCpfCnpj, minLength, textWithSpacesOnly } from "@/utils/masks";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Modal, Stack } from "react-bootstrap";
import { Back, Logo, Top } from "../Register/styles";
import {
  AddPhoto,
  Container,
  Description,
  Forms,
  Hidden,
  Icon,
  Models,
  Photos,
  Radio,
  RadioContainer,
  RadioLabel,
} from "./styles";

interface FormProps {
  step: number;
  openModal: boolean;
  setOpenModal: any;
  handleOpen: any;
  handleClose: any;
  handleBack: any;
  type: string;
  setType: any;
  description: string;
  setDescription: any;
  formData: any;
  setFormData: any;
}

export function Form({
  step,
  openModal,
  setOpenModal,
  handleOpen,
  handleClose,
  handleBack,
  type,
  setType,
  description,
  setDescription,
  formData,
  setFormData,
}: FormProps) {
  const router = useRouter();
  const handleEmpty = () =>
    type === ""
      ? alert(
          "Selecione um Modelo de Descrição, ou Adicione uma Descrição própria"
        )
      : router.push("/match");

  const inputFile = useRef<HTMLInputElement | null>(null);
  const handleHidden = () => {
    inputFile.current?.click();
  };

  const [error, setError] = useState<any>({});

  const handleValidations = (type: any, value: any) => {
    let errorText;
    switch (type) {
      case "name":
        errorText =
          value === "" ? "Campo Obrigatório" : textWithSpacesOnly(value);
        setError({ ...error, nameError: errorText });
        break;
      case "cpfCnpj":
        errorText = value === "" ? "Campo Obrigatório" : minLength(11)(value);
        setError({ ...error, cpfCnpjError: errorText });
        break;
      case "age":
        errorText = value === "" ? "Campo Obrigatório" : "";
        setError({ ...error, ageError: errorText });
        break;
      case "instagram":
        errorText = value === "" ? "Campo Obrigatório" : "";
        setError({ ...error, instagramError: errorText });
        break;
    }
  };

  const handleBlur = (e: any) => {
    handleValidations(e.target.name, e.target.value);
  };
  return (
    <Container>
      {step === 1 ? (
        <>
          <GlobalTitle title="Seu nome é" fontSize={15} />
          <Forms
            type="text"
            name="name"
            placeholder="Nome Aqui..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            required
            onBlur={handleBlur}
            autoFocus
          />
          {error && error.nameError && error.nameError.length > 1 && (
            <Error>{error.nameError}</Error>
          )}
          <br />
          <GlobalTitle title="Insira o Mesmo CPF de Cadastro" fontSize={15} />
          <Forms
            name="cpfCnpj"
            placeholder="CPF Aqui..."
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
          <Stack
            gap={2}
            direction="horizontal"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <GlobalTitle title="Qual sua Idade?" fontSize={15} />
              <Forms
                type="number"
                name="age"
                placeholder="Sua Idade"
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                value={formData.age}
                required
                onBlur={handleBlur}
              />
              {error && error.ageError && error.ageError.length > 1 && (
                <Error>{error.ageError}</Error>
              )}
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <GlobalTitle title="E seu Instagram?" fontSize={15} />
              <Forms
                name="instagram"
                placeholder="@"
                onChange={(e) =>
                  setFormData({ ...formData, instagram: e.target.value })
                }
                value={formData.instagram}
                required
                onBlur={handleBlur}
              />
              {error &&
                error.instagramError &&
                error.instagramError.length > 1 && (
                  <Error>{error.instagramError}</Error>
                )}
            </div>
          </Stack>
        </>
      ) : step === 2 ? (
        <>
          <GlobalTitle title="Adicione suas Melhores Fotos" />
          <Photos>
            <AddPhoto>
              <Hidden type="file" ref={inputFile} />
              <Icon
                onClick={handleHidden}
                src="/Match/MatchRegister/addPhoto.svg"
                width={35}
                height={35}
                alt=""
              />
            </AddPhoto>
            <AddPhoto>
              <Hidden type="file" ref={inputFile} />
              <Icon
                onClick={handleHidden}
                src="/Match/MatchRegister/addPhoto.svg"
                width={35}
                height={35}
                alt=""
              />
            </AddPhoto>
            <AddPhoto>
              <Hidden type="file" ref={inputFile} />
              <Icon
                onClick={handleHidden}
                src="/Match/MatchRegister/addPhoto.svg"
                width={35}
                height={35}
                alt=""
              />
            </AddPhoto>
            <AddPhoto>
              <Hidden type="file" ref={inputFile} />
              <Icon
                onClick={handleHidden}
                src="/Match/MatchRegister/addPhoto.svg"
                width={35}
                height={35}
                alt=""
              />
            </AddPhoto>
            <AddPhoto>
              <Hidden type="file" ref={inputFile} />
              <Icon
                onClick={handleHidden}
                src="/Match/MatchRegister/addPhoto.svg"
                width={35}
                height={35}
                alt=""
              />
            </AddPhoto>
            <AddPhoto>
              <Hidden type="file" ref={inputFile} />
              <Icon
                onClick={handleHidden}
                src="/Match/MatchRegister/addPhoto.svg"
                width={35}
                height={35}
                alt=""
              />
            </AddPhoto>
          </Photos>
        </>
      ) : (
        <>
          <GlobalTitle title="Insira uma Breve Descrição" />
          <Description
            placeholder="Insira uma Breve Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Models onClick={handleOpen}>
            Modelos de Descrição, dá uma olhadinha
          </Models>
          <Modal show={openModal} onHide={handleClose} centered>
            <Modal.Body
              style={{
                display: "flex",
                flexDirection: "column",
                background: `${Theme.color.primary_20}`,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Top>
                <Back
                  src="/Global/Icons/Back.svg"
                  width={20}
                  height={20}
                  alt=""
                  style={{ top: 100 }}
                  onClick={handleBack}
                />
                <Logo
                  src="/Match/matchLogo.svg"
                  width={1000}
                  height={400}
                  alt=""
                />
              </Top>
              <Stack gap={2}>
                <RadioContainer>
                  <Radio
                    type="radio"
                    id="first"
                    name="type"
                    value="first"
                    onChange={() => setType("first")}
                  />
                  <RadioLabel htmlFor="first">
                    Sou mais caseiro(a), foi um milagre eu ter saído hoje, no
                    geral sou de boa.
                  </RadioLabel>
                </RadioContainer>
                <RadioContainer>
                  <Radio
                    type="radio"
                    id="second"
                    name="type"
                    value="second"
                    onChange={() => setType("second")}
                  />
                  <RadioLabel htmlFor="second">
                    Gostos peculiares, não sei se você entenderia.
                  </RadioLabel>
                </RadioContainer>
                <RadioContainer>
                  <Radio
                    type="radio"
                    id="third"
                    name="type"
                    value="third"
                    onChange={() => setType("third")}
                  />
                  <RadioLabel htmlFor="third">
                    Meu negócio é diversão, sorriso e alegria.
                  </RadioLabel>
                </RadioContainer>
                <RadioContainer>
                  <Radio
                    type="radio"
                    id="fourth"
                    name="type"
                    value="fourth"
                    onChange={() => setType("fourth")}
                  />
                  <RadioLabel htmlFor="fourth">
                    Música, festa, amigos e muito beijo na boca é o que eu
                    gosto.
                  </RadioLabel>
                </RadioContainer>
              </Stack>
              <GlobalButton
                content={"Salvar e Seguir"}
                background={`${Theme.color.confirmation}`}
                color={`${Theme.color.background}`}
                width="90%"
                height="auto"
                onClick={handleEmpty}
                style={{ margin: "5px 0px" }}
              />
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  );
}
