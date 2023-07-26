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

export const NightAppCard = styled(Image)`
  width: 100%;
  height: auto;
  align-self: center;
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
