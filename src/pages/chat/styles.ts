import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";
import Theme from "../../styles/themes";

interface MessageProps {
  status: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary_80};
  min-height: 100vh;
  height: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${px2vw(70, 320)};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${({ theme }) => theme.color.primary_20};
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: ${px2vw(10, 320)};

  @media (min-width: 768px) {
    height: ${px2vw(70, 768)};
    padding-bottom: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    height: ${px2vw(70, 1024)};
    padding-bottom: ${px2vw(10, 1024)};
  }
`;

export const Pic = styled(Image)`
  width: ${px2vw(50, 320)};
  height: ${px2vw(50, 320)};
  border-radius: 100px;

  @media (min-width: 768px) {
    width: ${px2vw(50, 768)};
    height: ${px2vw(50, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(50, 1024)};
    height: ${px2vw(50, 1024)};
  }
`;

export const Name = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 72vh;
  background-color: ${({ theme }) => theme.color.primary_100};
  overflow: scroll;
  padding: 0 ${px2vw(10, 320)};

  @media (min-width: 768px) {
    padding: 0 ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    padding: 0 ${px2vw(10, 1024)};
    height: 68vh;
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 90%;
  height: ${px2vw(40, 320)};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.secondary_100};
  bottom: 20px;
  align-self: center;
  padding: ${px2vw(10, 320)};
  border: 0;
  color: ${({ theme }) => theme.color.gray_10};

  @media (min-width: 768px) {
    height: ${px2vw(40, 768)};
    padding: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    height: ${px2vw(40, 1024)};
    padding: ${px2vw(10, 1024)};
  }
`;

export const MessageBubble = styled.div<MessageProps>`
  display: flex;
  flex-direction: row;
  text-align: justify;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: ${({ status }) =>
    status === "received" ? 0 : "20px"};
  border-bottom-right-radius: ${({ status }) =>
    status === "received" ? "20px" : 0};
  padding: ${px2vw(10, 320)};
  background-color: ${({ status }) =>
    status === "received" ? Theme.color.gray_10 : Theme.color.secondary_100};
  margin-top: ${px2vw(10, 320)};

  @media (min-width: 768px) {
    padding: ${px2vw(10, 768)};
    margin-top: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    padding: ${px2vw(10, 1024)};
    margin-top: ${px2vw(10, 1024)};
  }
`;

export const Message = styled.label<MessageProps>`
  color: ${({ status }) =>
    status === "received" ? Theme.color.secondary_100 : Theme.color.gray_10};
`;
