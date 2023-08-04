import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 20%;
`;

export const NightAppCard = styled(Image)`
  position: absolute;
  width: 95%;
  height: auto;
  align-self: center;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const CardDetails = styled.label`
  z-index: 2;
  color: ${({ theme }) => theme.color.gray_10};
`;

export const Form = styled.input`
  background-color: ${({ theme }) => theme.color.secondary_100};
  margin-top: 2%;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  color: ${({ theme }) => theme.color.gray_10};
  width: 100%;
`;
