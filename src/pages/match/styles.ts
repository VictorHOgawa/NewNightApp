import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
`;

export const Background = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
`;

export const Logo = styled(Image)`
  width: 50%;
  height: auto;
`;

export const Back = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 50px;
`;

export const Card = styled.div`
  display: flex;
  width: 90%;
  height: 60vh;
  opacity: 1;
  border-radius: 10px;
  align-self: center;
  margin-top: 10%;
  justify-content: space-between;
  overflow: hidden;
`;

export const Photo = styled(Image)`
  position: absolute;
  width: 90%;
  height: 60%;
  object-fit: cover;
  z-index: -1;
  border-radius: 10px;
`;

export const Name = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(25, 320)};
  align-self: flex-end;
  margin-left: 2%;
`;

export const Arrow = styled(Image)`
  width: 50px;
  height: 50px;
  align-self: flex-end;
  margin-right: 2%;
  margin-bottom: 2%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }
`;
