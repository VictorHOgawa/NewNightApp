import Image from "next/image";
import { Stack } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
  height: auto;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 70%;
    margin-top: 20px;
    justify-content: space-between;
    align-self: center;
  }
`;

export const DetailImg = styled(Image)`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: 90%;
    align-self: center;
  }
`;

export const Nav = styled(Stack)`
  display: flex;
  width: 100%;
  justify-content: center;
  &::after {
    align-self: center;
    position: absolute;
    content: "";
    width: 70%;
    border-bottom: 1px solid white;
    margin-top: 60px;

    @media (min-width: 768px) {
      width: 30%;
      margin-top: 70px;
    }
  }
`;

export const Banner = styled.div`
  width: 95%;
  height: 20vh;
  background-color: red;
  align-self: center;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 70%;
  }
`;
