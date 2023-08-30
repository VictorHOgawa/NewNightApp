import { Back } from "@/components/Global/Back";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { Stack } from "react-bootstrap";
import {
  ChatDiv,
  Container,
  Header,
  Input,
  MainDiv,
  Message,
  MessageBubble,
  Name,
  Pic,
} from "./styles";

export default function Chat() {
  return (
    <Container>
      <LoadingFull />
      <Header>
        <Back />
        <Stack
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pic src="/MyMatches/Person.svg" width={50} height={50} alt="" />
          <Name>Name</Name>
        </Stack>
      </Header>
      <MainDiv>
        <ChatDiv>
          <MessageBubble status="sent">
            <Message status="sent">Test</Message>
          </MessageBubble>
          <MessageBubble status="received">
            <Message status="received">test</Message>
          </MessageBubble>
          <MessageBubble status="received">
            <Message status="received">test</Message>
          </MessageBubble>
          <MessageBubble status="sent">
            <Message status="sent">
              Test Test Test Test Test Test Test Test Test Test Test Test Test
              Test Test Test Test Test Test Test Test Test Test Test Test Test
              Test Test Test Test Test Test Test Test Test Test Test Test Test
              Test Test{" "}
            </Message>
          </MessageBubble>
          <MessageBubble status="sent">
            <Message status="sent">Test</Message>
          </MessageBubble>
          <MessageBubble status="received">
            <Message status="received">test</Message>
          </MessageBubble>
          <MessageBubble status="received">
            <Message status="received">test</Message>
          </MessageBubble>
          <MessageBubble status="sent">
            <Message status="sent">
              Test Test Test Test Test Test Test Test Test Test Test Test Test
              Test Test Test Test Test Test Test Test Test Test Test Test Test
              Test Test Test Test Test Test Test Test Test Test Test Test Test
              Test Test last one{" "}
            </Message>
          </MessageBubble>
        </ChatDiv>
        <Input placeholder="Digite uma mensagem..." />
      </MainDiv>
    </Container>
  );
}
