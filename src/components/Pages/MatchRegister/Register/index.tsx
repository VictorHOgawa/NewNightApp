import { GlobalButton } from "@/components/Global/Button";
import { Back, Container, Download, Logo, Top } from "./styles";
import Theme from "@/styles/themes";
import { Stack } from "react-bootstrap";
import { Tabs } from "@/components/Global/Tabs";
import { Form } from "../Form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    cpfCnpj: "",
    age: "",
    instagram: "",
    photos: [
      {
        location: "",
      },
    ],
  });

  const handleSteps = () => {
    if (
      step === 1 &&
      formData.name === "" &&
      formData.cpfCnpj === "" &&
      formData.age === "" &&
      formData.instagram === ""
    ) {
      return alert("Preencha o formulário");
    }
    if (
      (step === 1 && formData.name === "") ||
      formData.cpfCnpj === "" ||
      formData.age === "" ||
      formData.instagram === ""
    ) {
      return alert("Finalize o preenchimento do Formulário");
    }
    if (
      step === 1 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.age !== "" &&
      formData.instagram !== ""
    ) {
      setStep(2);
    }
    if (step === 2) {
      setStep(3);
    }
    if (step === 3 && description === "") {
      alert("Adicione uma Descrição, ou selecione um Modelo já pronto");
    }
    if (step === 3 && description !== "") {
      router.push("/match");
    }
  };
  const handleBack = () => {
    step === 1
      ? router.back()
      : step !== 1 && step !== 3
      ? setStep(step - 1)
      : step === 3 && !openModal
      ? setStep(step - 1)
      : openModal
      ? setOpenModal(false)
      : null;
  };

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
    <Container>
      <Top>
        <Back
          src="/Global/Icons/Back.svg"
          width={20}
          height={20}
          alt=""
          style={{ top: 100 }}
          onClick={handleBack}
        />
        <Logo src="/Match/matchLogo.svg" width={1000} height={400} alt="" />
      </Top>
      {width < 768 ? (
        <>
          <Stack
            gap={3}
            direction="horizontal"
            style={{ marginLeft: "4%", marginTop: "2%" }}
          >
            {step === 1 ? (
              <>
                <Tabs
                  style={{ background: `${Theme.color.primary_60}` }}
                  active={true}
                />
                <Tabs active={false} />
                <Tabs active={false} />
              </>
            ) : step === 2 ? (
              <>
                <Tabs
                  style={{ background: `${Theme.color.primary_60}` }}
                  active={true}
                />
                <Tabs
                  style={{ background: `${Theme.color.primary_60}` }}
                  active={true}
                />{" "}
                <Tabs active={false} />
              </>
            ) : (
              <>
                <Tabs
                  style={{ background: `${Theme.color.primary_60}` }}
                  active={true}
                />
                <Tabs
                  style={{ background: `${Theme.color.primary_60}` }}
                  active={true}
                />
                <Tabs
                  style={{ background: `${Theme.color.primary_60}` }}
                  active={true}
                />
              </>
            )}
          </Stack>
          <br />
          <br />
          <Form
            step={step}
            handleClose={handleClose}
            handleOpen={handleOpen}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleBack={handleBack}
            type={type}
            setType={setType}
            description={description}
            setDescription={setDescription}
            formData={formData}
            setFormData={setFormData}
          />
          <GlobalButton
            content={
              step === 1
                ? "Salvar e Seguir"
                : step === 2
                ? "Próximo"
                : "Salvar e Seguir"
            }
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.background}`}
            width="90%"
            height="auto"
            onClick={handleSteps}
            style={{ margin: "5px 0px" }}
          />
          {step === 2 ? (
            <Download>
              Para uma Experiência Melhor Baixe o App da Night
            </Download>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <br />
          <Download>Para uma Experiência Melhor Baixe o App da Night</Download>
          <br />
        </>
      )}
    </Container>
  );
}
