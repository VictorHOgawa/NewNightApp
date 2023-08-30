import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 10px;
  background: linear-gradient(145deg, #9c38ce90, #420a8990, #9c38ce90);
  align-self: center;
  align-items: center;
  margin-top: 15%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;

  @media (min-width: 768px) {
    margin-top: 2%;
  }
`;

export const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;

export const Back = styled(Image)`
  width: 20px;
  height: 20px;
  margin-left: -50px;
`;

export const Download = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  color: ${({ theme }) => theme.color.gray_10};
  border: 0;
  padding: 5px;
  width: 75%;
  margin: 5px 0px;
  font-size: ${px2vw(12, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;
