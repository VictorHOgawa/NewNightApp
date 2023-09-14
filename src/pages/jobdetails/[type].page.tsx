// import { Ad } from "@/components/Global/Ad";
// import { Back } from "@/components/Global/Back";
// import { GlobalButton } from "@/components/Global/Button";
// import { Header } from "@/components/Global/Header";
// import { XLogo, XTop } from "@/components/Global/Header/styles";
// import { LoadingFull } from "@/components/Global/Loading/Full";
// import { More } from "@/components/Global/More";
// import { GlobalTitle } from "@/components/Global/Title";
// import Theme from "@/styles/themes";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import { Modal, Stack } from "react-bootstrap";
// import {
//   Container,
//   Content,
//   Help,
//   Icon,
//   Img,
//   Info,
//   Input,
//   JobCard,
//   Text,
//   Values,
// } from "./styles";
// import { AuthPostAPI, authGetAPI } from "@/lib/axios";
// import { LoadingIn } from "@/components/Global/Loading/In";
// import { LoadingOut } from "@/components/Global/Loading/Out";
// import moment from "moment";
// import "moment/locale/pt-br";

// export default function JobDetails() {
//   const router = useRouter();
//   const { type } = useRouter().query as any;
//   const [open, setOpen] = useState(false);
//   const [jobs, setJobs] = useState<any>([]);
//   const [loading, setLoading] = useState(false);
//   const [portariaCode, setPortariaCode] = useState("");
//   console.log("portariaCode: ", portariaCode);

//   async function getDetails() {
//     setLoading(true);
//     const connect = await authGetAPI("/user/work");
//     if (connect.status !== 200) {
//       alert(connect.body);
//       return setLoading(false);
//     }
//     setJobs(connect.body.eventWork);
//     return setLoading(false);
//   }

//   console.log("jobs: ", jobs);

//   const handleClick = async () => {
//     if (type === "Portaria") {
//       setLoading(true);
//       const connect = await AuthPostAPI(`/user/work/${portariaCode}`, {});
//       console.log("connectSend: ", connect);
//       if (connect.status !== 200) {
//         alert(connect.body);
//         return setLoading(false);
//       }
//       router.reload();
//       return setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getDetails();
//   }, []);
//   return (
//     <Container>
//       <Header />
//       <Ad />
//       {loading ? (
//         <LoadingIn />
//       ) : (
//         <>
//           <LoadingOut />
//           <br />
//           <br />
//           <Content>
//             <GlobalTitle title={"Jobs - " + type} />
//             {jobs.map((item) => (
//               <JobCard>
//                 <Stack direction="horizontal" style={{ alignItems: "center" }}>
//                   <Img
//                     src={item.event.photo_location}
//                     width={50}
//                     height={50}
//                     alt=""
//                   />
//                   <Stack style={{ marginLeft: "5%" }}>
//                     <Text style={{ fontWeight: "bold", fontSize: 15 }}>
//                       {item.event.name}
//                     </Text>
//                     <Text>
//                       <Icon
//                         src="/Global/Icons/Clock.svg"
//                         width={15}
//                         height={15}
//                         alt=""
//                       />
//                       {""}
//                       <Text style={{ fontWeight: "bold" }}>
//                         {""} {moment(item.event.date).format("DD/MM/YYYY")}
//                       </Text>{" "}
//                       às {moment(item.event.date).format("HH:mm")}
//                     </Text>
//                     <Text>
//                       <Icon
//                         src="/Global/Icons/LocationPin.svg"
//                         width={15}
//                         height={15}
//                         alt=""
//                       />
//                       <Text style={{ fontWeight: "bold" }}>
//                         {""} {item.event.local}
//                       </Text>{" "}
//                       {item.event.city.name} / {item.event.city.state}
//                     </Text>
//                   </Stack>
//                 </Stack>
//                 <GlobalButton
//                   content={type === "Promoters" ? "Pegar Código" : "Ler QrCode"}
//                   background={`${Theme.color.confirmation}`}
//                   color={`${Theme.color.background}`}
//                   height="auto"
//                   width="40%"
//                   style={{ alignSelf: "center" }}
//                 />
//               </JobCard>
//             ))}
//           </Content>
//           <Help>
//             <Icon src="/Checkout/Video.svg" width={12} height={12} alt="" />
//             {""}Dúvidas? Veja esse Rápido Vídeo
//           </Help>

//           <More
//             type={
//               type === "Promoters"
//                 ? "promoter"
//                 : type === "Portaria"
//                 ? "portaria"
//                 : ""
//             }
//             handleClick={handleClick}
//             portariaCode={portariaCode}
//             setPortariaCode={setPortariaCode}
//           />
//           <Modal show={open} onHide={() => setOpen(false)} centered>
//             <Modal.Body
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 background: `${Theme.color.primary_20}`,
//               }}
//             >
//               <XTop>
//                 <Back />
//                 <XLogo
//                   src="/Global/logoHorizontal.svg"
//                   width={1000}
//                   height={300}
//                   alt=""
//                 />
//               </XTop>
//               <br />
//               <GlobalTitle
//                 title="Benefício do Seu Cupom:"
//                 background={`${Theme.color.background}`}
//               />
//               <Stack gap={1} style={{ marginTop: "2%" }}>
//                 <Info>
//                   <Text>Quantidade Disponível</Text>
//                   <Values>150 Cupons</Values>
//                 </Info>
//                 <Info>
//                   <Text>Desconto Disponível</Text>
//                   <Values>20%</Values>
//                 </Info>
//                 <Info>
//                   <Text>Data de Expiração</Text>
//                   <Values>14/09</Values>
//                 </Info>
//               </Stack>
//               <br />
//               <br />
//               <GlobalTitle
//                 title="Insira o Código que Desejar"
//                 background={`${Theme.color.background}`}
//               />
//               <Input placeholder="Exemplo: Carol20" />
//               <br />
//               <br />
//               <GlobalButton
//                 content="Salvar e Seguir"
//                 background={`${Theme.color.confirmation}`}
//                 color={`${Theme.color.secondary_100}`}
//                 width="60%"
//                 height="auto"
//                 style={{ alignSelf: "center", marginTop: "5%" }}
//                 onClick={() => setOpen(false)}
//               />
//             </Modal.Body>
//           </Modal>
//         </>
//       )}
//     </Container>
//   );
// }
