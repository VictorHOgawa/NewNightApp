import px2vw from "@/utils/size";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled(Modal)`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: transparent;
`;

export const Back = styled(Image)`
  position: absolute;
  left: 20px;
  top: 40px;
  background-color: transparent;
  border: 0;
  width: 20px;
  height: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.gray_10};
`;

export const Body = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary_60};
  padding-top: 50px;
`;

export const Card = styled(Image)`
  width: 90%;
  height: auto;
  align-self: center;
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${({ theme }) => theme.color.background};
  width: 30px;
  height: 6px;
  margin-left: 10px;
`;

export const Text = styled.label`
  width: max-content;
  color: ${({ theme }) => theme.color.gray_10};
  line-height: 2;
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(15, 1024)};
  }
`;

export const Form = styled.input`
  width: 95%;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border: 0;
  border-radius: 5px;
  align-self: center;
  margin-top: 5px;
`;
