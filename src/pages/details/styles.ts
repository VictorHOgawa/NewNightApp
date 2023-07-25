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
`;

export const DetailImg = styled(Image)`
  width: 100%;
  height: auto;
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
  }
`;

export const Banner = styled.div`
  width: 85vw;
  height: 20vh;
  background-color: red;
  align-self: center;
  border-radius: 20px;
`;
