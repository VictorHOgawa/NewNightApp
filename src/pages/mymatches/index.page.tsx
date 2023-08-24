import { Header } from "@/components/Global/Header";
import { Container, MainContainer } from "./styles";
import Image from "next/image";
import { Matched } from "@/components/Pages/MyMatches/Matched";
import { Crew } from "@/components/Pages/MyMatches/Crew";
import { Chat } from "@/components/Pages/MyMatches/Chat";

export default function MyMatches() {
  return (
    <Container>
      <Header page="secondary" selected="match" />
      <Image
        src="/Global/FullLogo.svg"
        width={125}
        height={125}
        alt=""
        style={{ alignSelf: "center" }}
      />
      <MainContainer>
        <br />
        <br />
        <Matched />
        <br />
        <Crew />
        <br />
        <Chat />
      </MainContainer>
    </Container>
  );
}
