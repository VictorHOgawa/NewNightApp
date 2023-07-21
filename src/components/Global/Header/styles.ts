import Image from "next/image";
import { styled } from "styled-components";
import { Stack } from "react-bootstrap";

export const Container = styled.div``;

export const Top = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  @media (min-width: 768px) {
  }
`;

export const Logo = styled(Image)`
  width: max-content;
`;

export const ButtonGroup = styled(Stack)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 75px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 10px 10px 10px 10px ${({ theme }) => theme.color.secondary_100};
  z-index: 5;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 35px;
`;

export const Moon = styled(Image)`
  width: 65px;
  height: 65px;
`;
