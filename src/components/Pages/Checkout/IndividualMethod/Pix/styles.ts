import Theme from "@/styles/themes";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Pix = styled.img`
  width: 80%;
  height: auto;
  align-self: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Copy = styled.button`
  display: flex;
  background-color: ${Theme.color.pix};
  color: ${Theme.color.gray_10};
  width: auto;
  height: auto;
  align-self: center;
  border-radius: 10px;
  padding: 5px 10px;
  margin-top: 2%;
  border: 0;
  font-weight: bold;
`;
