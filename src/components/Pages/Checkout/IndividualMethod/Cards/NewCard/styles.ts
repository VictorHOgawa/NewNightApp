import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 90%;
  align-self: center;

  @media (min-width: 768px) {
    width: 30%;
  }
`;
