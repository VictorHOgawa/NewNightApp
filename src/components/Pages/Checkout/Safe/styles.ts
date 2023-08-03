import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  align-self: center;
  width: 95%;
  margin-left: 2.5%;
  margin-top: 5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 30%;
    margin-left: 35%;
    margin-top: 2%;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: auto;
`;
