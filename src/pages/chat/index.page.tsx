import { Stack } from "react-bootstrap";
import Theme from "../../styles/themes";
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
import { Back } from "@/components/Global/Back";

export default function Chat() {
  return (
    <Container>
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
              Test Test{" "}
            </Message>
          </MessageBubble>
        </ChatDiv>
        <Input placeholder="Digite uma mensagem..." />
      </MainDiv>
    </Container>
  );
}
